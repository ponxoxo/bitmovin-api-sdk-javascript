import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import InformationApi from './information/InformationApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import BroadcastTsMuxing from '../../../../models/BroadcastTsMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {BroadcastTsMuxingListQueryParams, BroadcastTsMuxingListQueryParamsBuilder} from './BroadcastTsMuxingListQueryParams';
import {getType, map} from '../../../../common/Mapper';

/**
 * BroadcastTsApi - object-oriented interface
 * @export
 * @class BroadcastTsApi
 * @extends {BaseAPI}
 */
export default class BroadcastTsApi extends BaseAPI {
  public customdata: CustomdataApi;
  public information: InformationApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.information = new InformationApi(configuration);
  }

  /**
   * @summary Add Broadcast TS Muxing
   * @param {string} encodingId ID of the encoding.
   * @param {BroadcastTsMuxing} broadcastTsMuxing The Broadcast TS Muxing to be created
   * @throws {RequiredError}
   * @memberof BroadcastTsApi
   */
  public create(encodingId: string, broadcastTsMuxing?: BroadcastTsMuxing): Promise<BroadcastTsMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<BroadcastTsMuxing>('/encoding/encodings/{encoding_id}/muxings/broadcast-ts', pathParamMap, broadcastTsMuxing).then((response) => {
      return new BroadcastTsMuxing(response);
    });
  }

  /**
   * @summary Delete Broadcast TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Broadcast TS muxing
   * @throws {RequiredError}
   * @memberof BroadcastTsApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/broadcast-ts/{muxing_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Broadcast TS Muxing Details
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Broadcast TS Muxing
   * @throws {RequiredError}
   * @memberof BroadcastTsApi
   */
  public get(encodingId: string, muxingId: string): Promise<BroadcastTsMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<BroadcastTsMuxing>('/encoding/encodings/{encoding_id}/muxings/broadcast-ts/{muxing_id}', pathParamMap).then((response) => {
      return new BroadcastTsMuxing(response);
    });
  }

  /**
   * @summary List Broadcast TS Muxings
   * @param {string} encodingId ID of the Encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof BroadcastTsApi
   */
  public list(encodingId: string, queryParameters?: BroadcastTsMuxingListQueryParams | ((q: BroadcastTsMuxingListQueryParamsBuilder) => BroadcastTsMuxingListQueryParamsBuilder)): Promise<PaginationResponse<BroadcastTsMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: BroadcastTsMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new BroadcastTsMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<BroadcastTsMuxing>>('/encoding/encodings/{encoding_id}/muxings/broadcast-ts', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<BroadcastTsMuxing>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new BroadcastTsMuxing(i));
      }
      return paginationResponse;
    });
  }
}