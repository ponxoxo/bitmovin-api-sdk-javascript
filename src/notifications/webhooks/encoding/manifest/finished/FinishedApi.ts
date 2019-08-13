import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import Webhook from '../../../../../models/Webhook';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {getType, map} from '../../../../../common/Mapper';

/**
 * FinishedApi - object-oriented interface
 * @export
 * @class FinishedApi
 * @extends {BaseAPI}
 */
export default class FinishedApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Manifest Finished Successfully Webhook (All Manifests)
   * @param {Webhook} webhook Add a new webhook notification if a manifest creation finished successfully
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public create(webhook?: Webhook): Promise<PaginationResponse<Webhook>> {
    return this.restClient.post<PaginationResponse<Webhook>>('/notifications/webhooks/encoding/manifest/finished', {}, webhook).then((response) => {
      const paginationResponse = new PaginationResponse<Webhook>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Webhook(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary Add Manifest Finished Successfully Webhook Notification (Specific Manifest)
   * @param {string} manifestId Id of the manifest resource
   * @param {Webhook} webhook The webhook notifications object
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public createByManifestId(manifestId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<Webhook>('/notifications/webhooks/encoding/manifest/{manifest_id}/finished', pathParamMap, webhook).then((response) => {
      return new Webhook(response);
    });
  }

  /**
   * @summary Replace Manifest Finished Webhook Notification
   * @param {string} notificationId Id of the webhook notification
   * @param {Webhook} webhook The webhook notification with the updated values
   * @throws {RequiredError}
   * @memberof FinishedApi
   */
  public update(notificationId: string, webhook?: Webhook): Promise<Webhook> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.put<Webhook>('/notifications/webhooks/encoding/manifest/finished/{notification_id}', pathParamMap, webhook).then((response) => {
      return new Webhook(response);
    });
  }
}