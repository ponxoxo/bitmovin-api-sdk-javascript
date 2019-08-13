import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomData from '../../../../models/CustomData';
import {getType, map} from '../../../../common/Mapper';

/**
 * CustomdataApi - object-oriented interface
 * @export
 * @class CustomdataApi
 * @extends {BaseAPI}
 */
export default class CustomdataApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Audio Mix Filter Custom Data
   * @param {string} filterId Id of the Audio Mix configuration.
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(filterId: string): Promise<CustomData> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<CustomData>('/encoding/filters/audio-mix/{filter_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}