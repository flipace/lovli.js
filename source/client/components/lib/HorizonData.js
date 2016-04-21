import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

export default function subscribe(mapData) {
  return (TargetComponent) => {
    class DataSubscriber extends React.Component {
      static contextTypes = {
        horizon: React.PropTypes.func
      };

      constructor(props) {
        super(props);

        this.subscriptions = mapData(props);

        // generate data object which will hold subscription documents
        const data = Object.keys(this.subscriptions).reduce( (acc, name) => {
          acc[name] = [];
          return acc;
        }, {});

        this.state = {
          subscribed: false,
          updates: 0,
          data
        };
      }

      componentDidMount() {
        if (!this.state.subscribed && this.context.horizon) {
          setTimeout(() => {
            this.subscribe();
          }, 1000);
        }
      }

      subscribe() {
        const subscriptions = mapData(this.props);

        for (let name of Object.keys(subscriptions)) {
          let queryResult;
          const { collection, query } = subscriptions[name];

          const horizonCollection = this.context.horizon(collection);

          if (query && Object.keys(query).length) {
            queryResult = horizonCollection.findAll(query);
          } else {
            queryResult = horizonCollection;
          }

          queryResult
            .watch()
            .forEach(docs => {
              this.setState({
                data: {
                  ...this.state.data,
                  [collection]: docs
                }
              });
            });
        }
      }

      render() {
        return (
          <TargetComponent
            {...this.props}
            {...this.state.data}
            horizon={this.context.horizon}
          />
        );
      }
    }

    return hoistStatics(DataSubscriber, TargetComponent);
  }
}
