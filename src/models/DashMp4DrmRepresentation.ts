import {map} from '../common/Mapper';
import DashMp4Representation from './DashMp4Representation';

/**
 * @export
 * @class DashMp4DrmRepresentation
 */
export class DashMp4DrmRepresentation extends DashMp4Representation {
  /**
   * DRM Id (required)
   * @type {string}
   * @memberof DashMp4DrmRepresentation
   */
  public drmId: string;

  constructor(obj: Partial<DashMp4DrmRepresentation>) {
    super(obj);
    this.drmId = map(obj.drmId);
  }
}

export default DashMp4DrmRepresentation;
