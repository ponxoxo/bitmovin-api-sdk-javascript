import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import BitmovinResponse from '../../../models/BitmovinResponse';
import Domain from '../../../models/Domain';
import PaginationResponse from '../../../models/PaginationResponse';

/**
 * DomainsApi - object-oriented interface
 * @export
 * @class DomainsApi
 * @extends {BaseAPI}
 */
export default class DomainsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Domain
   * @param {string} licenseId Id of the Player License
   * @param {Domain} domain The Domain to be added to Player License Allowlist
   * @throws {BitmovinError}
   * @memberof DomainsApi
   */
  public create(licenseId: string, domain?: Domain): Promise<Domain> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.post<Domain>('/player/licenses/{license_id}/domains', pathParamMap, domain).then((response) => {
      return map(response, Domain);
    });
  }

  /**
   * @summary Delete Domain
   * @param {string} licenseId Id of license
   * @param {string} domainId Id of the domain
   * @throws {BitmovinError}
   * @memberof DomainsApi
   */
  public delete(licenseId: string, domainId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      license_id: licenseId,
      domain_id: domainId
    };
    return this.restClient.delete<BitmovinResponse>('/player/licenses/{license_id}/domains/{domain_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary List allowed Domains for Player License
   * @param {string} licenseId Id of the Player License
   * @throws {BitmovinError}
   * @memberof DomainsApi
   */
  public list(licenseId: string): Promise<PaginationResponse<Domain>> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.get<PaginationResponse<Domain>>('/player/licenses/{license_id}/domains', pathParamMap).then((response) => {
      return new PaginationResponse<Domain>(response, Domain);
    });
  }
}
