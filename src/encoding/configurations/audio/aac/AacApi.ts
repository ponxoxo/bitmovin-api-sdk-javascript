import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import AacAudioConfiguration from '../../../../models/AacAudioConfiguration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import {AacAudioConfigurationListQueryParams, AacAudioConfigurationListQueryParamsBuilder} from './AacAudioConfigurationListQueryParams';

/**
 * AacApi - object-oriented interface
 * @export
 * @class AacApi
 * @extends {BaseAPI}
 */
export default class AacApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create AAC Codec Configuration
   * @param {AacAudioConfiguration} aacAudioConfiguration The AAC Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof AacApi
   */
  public create(aacAudioConfiguration?: AacAudioConfiguration): Promise<AacAudioConfiguration> {
    return this.restClient.post<AacAudioConfiguration>('/encoding/configurations/audio/aac', {}, aacAudioConfiguration).then((response) => {
      return map(response, AacAudioConfiguration);
    });
  }

  /**
   * @summary Delete AAC Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof AacApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/aac/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary AAC Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof AacApi
   */
  public get(configurationId: string): Promise<AacAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<AacAudioConfiguration>('/encoding/configurations/audio/aac/{configuration_id}', pathParamMap).then((response) => {
      return map(response, AacAudioConfiguration);
    });
  }

  /**
   * @summary List AAC Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AacApi
   */
  public list(queryParameters?: AacAudioConfigurationListQueryParams | ((q: AacAudioConfigurationListQueryParamsBuilder) => AacAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<AacAudioConfiguration>> {
    let queryParams: AacAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AacAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AacAudioConfiguration>>('/encoding/configurations/audio/aac', {}, queryParams).then((response) => {
      return new PaginationResponse<AacAudioConfiguration>(response, AacAudioConfiguration);
    });
  }
}
