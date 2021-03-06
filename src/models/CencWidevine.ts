import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class CencWidevine
 */
export class CencWidevine {
  /**
   * Base64 encoded pssh payload (required)
   * @type {string}
   * @memberof CencWidevine
   */
  public pssh?: string;

  constructor(obj?: Partial<CencWidevine>) {
    if(!obj) {
      return;
    }
    this.pssh = map(obj.pssh);
  }
}

export default CencWidevine;

