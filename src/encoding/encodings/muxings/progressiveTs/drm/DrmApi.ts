import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import FairplayApi from './fairplay/FairplayApi';
import Drm from '../../../../../models/Drm';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {getType, map} from '../../../../../common/Mapper';

/**
 * DrmApi - object-oriented interface
 * @export
 * @class DrmApi
 * @extends {BaseAPI}
 */
export default class DrmApi extends BaseAPI {
  public fairplay: FairplayApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.fairplay = new FairplayApi(configuration);
  }

  /**
   * @summary List all DRM configurations of Progressive TS Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive TS muxing
   * @throws {RequiredError}
   * @memberof DrmApi
   */
  public list(encodingId: string, muxingId: string): Promise<PaginationResponse<Drm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<Drm>>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/drm', pathParamMap).then((response) => {
      const paginationResponse = new PaginationResponse<Drm>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => map(i, getType(i, Drm)));
      }
      return paginationResponse;
    });
  }
}