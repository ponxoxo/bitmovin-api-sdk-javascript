import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import TtmlEmbed from '../../../../../../models/TtmlEmbed';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import TtmlEmbedListQueryParams from './TtmlEmbedListQueryParams';

/**
 * TtmlApi - object-oriented interface
 * @export
 * @class TtmlApi
 * @extends {BaseAPI}
 */
export default class TtmlApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary CMAF Embed TTML Captions
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the CMAF muxing
   * @param {TtmlEmbed} [ttmlEmbed] The TTML embed captions to be created.
   * @throws {RequiredError}
   * @memberof TtmlApi
   */
  public create(encodingId: string, muxingId: string, ttmlEmbed?: TtmlEmbed): Promise<TtmlEmbed> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<TtmlEmbed>('/encoding/encodings/{encoding_id}/muxings/cmaf/{muxing_id}/captions/ttml', pathParamMap, ttmlEmbed).then((response) => {
      return new TtmlEmbed(response);
    });
  }

  /**
   * @summary Delete TTML Embed Captions
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the CMAF muxing
   * @param {string} captionsId Id of the captions configuration.
   * @throws {RequiredError}
   * @memberof TtmlApi
   */
  public delete(encodingId: string, muxingId: string, captionsId: string): Promise<TtmlEmbed> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      captions_id: captionsId
    };
    return this.restClient.delete<TtmlEmbed>('/encoding/encodings/{encoding_id}/muxings/cmaf/{muxing_id}/captions/ttml/{captions_id}', pathParamMap).then((response) => {
      return new TtmlEmbed(response);
    });
  }

  /**
   * @summary TTML Embed Captions Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the CMAF muxing
   * @param {string} captionsId Id of the captions.
   * @throws {RequiredError}
   * @memberof TtmlApi
   */
  public get(encodingId: string, muxingId: string, captionsId: string): Promise<TtmlEmbed> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      captions_id: captionsId
    };
    return this.restClient.get<TtmlEmbed>('/encoding/encodings/{encoding_id}/muxings/cmaf/{muxing_id}/captions/ttml/{captions_id}', pathParamMap).then((response) => {
      return new TtmlEmbed(response);
    });
  }

  /**
   * @summary List TTML Embed Captions
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the CMAF muxing
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof TtmlApi
   */
  public list(encodingId: string, muxingId: string, queryParams?: TtmlEmbedListQueryParams): Promise<PaginationResponse<TtmlEmbed>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<TtmlEmbed>>('/encoding/encodings/{encoding_id}/muxings/cmaf/{muxing_id}/captions/ttml', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<TtmlEmbed>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new TtmlEmbed(i));
      }
      return paginationResponse;
    });
  }
}
