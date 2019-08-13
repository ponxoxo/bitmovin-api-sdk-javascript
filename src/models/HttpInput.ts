import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class HttpInput
 */
export class HttpInput extends Input {
  /**
   * Host Url or IP of the HTTP server (required)
   * @type {string}
   * @memberof HttpInput
   */
  public host: string;

  /**
   * Basic Auth Username, if required
   * @type {string}
   * @memberof HttpInput
   */
  public username?: string;

  /**
   * Basic Auth Password, if required
   * @type {string}
   * @memberof HttpInput
   */
  public password?: string;

  /**
   * Custom Port
   * @type {number}
   * @memberof HttpInput
   */
  public port?: number;

  constructor(obj: Partial<HttpInput>) {
    super(obj);
    this.host = map(obj.host);
    this.username = map(obj.username);
    this.password = map(obj.password);
    this.port = map(obj.port);
  }
}

export default HttpInput;
