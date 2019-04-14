import Braintree from 'braintree';
import Config from 'config';

const btConfig = Config.get('braintree');
const btPrivateConfig = Config.get('private.braintree');

const gateway = Braintree.connect({
  environment: btConfig.sandbox ? Braintree.Environment.Sandbox : Braintree.Environment.Production,
  merchantId: btConfig.merchantId,
  publicKey: btConfig.publicKey,
  privateKey: btPrivateConfig.privateKey,
});

export default gateway;
