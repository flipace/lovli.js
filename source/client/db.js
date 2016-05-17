import Horizon from '@horizon/client';

const horizon = Horizon({
  secure: false
});

horizon.connect();

export default horizon;
