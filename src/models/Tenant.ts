import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Tenant
 */
export class Tenant extends BitmovinResource {
  /**
   * Email address of the tenant. (required)
   * @type {string}
   * @memberof Tenant
   */
  public eMail?: string;

  constructor(obj?: Partial<Tenant>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.eMail = map(obj.eMail);
  }
}

export default Tenant;

