import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import EncodingApi from './encoding/EncodingApi';

/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
export default class WebhooksApi extends BaseAPI {
  public encoding: EncodingApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.encoding = new EncodingApi(configuration);
  }
}
