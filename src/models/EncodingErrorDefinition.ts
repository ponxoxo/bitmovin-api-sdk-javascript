import {map, mapArray} from '../common/Mapper';
import ErrorRetryHint from './ErrorRetryHint';

/**
 * @export
 * @class EncodingErrorDefinition
 */
export class EncodingErrorDefinition {
  /**
   * The error code.
   * @type {number}
   * @memberof EncodingErrorDefinition
   */
  public code?: number;

  /**
   * The error category.
   * @type {string}
   * @memberof EncodingErrorDefinition
   */
  public category?: string;

  /**
   * The error message, optional. Can include placeholders like {1}, {2} which are replaced with the respective dependency when the error is thrown.
   * @type {string}
   * @memberof EncodingErrorDefinition
   */
  public message?: string;

  /**
   * The returned error description.
   * @type {string}
   * @memberof EncodingErrorDefinition
   */
  public description?: string;

  /**
   * Indicates if the call that caused the error should be retried.
   * @type {ErrorRetryHint}
   * @memberof EncodingErrorDefinition
   */
  public retryHint?: ErrorRetryHint;

  constructor(obj?: Partial<EncodingErrorDefinition>) {
    if(!obj) {
      return;
    }
    this.code = map(obj.code);
    this.category = map(obj.category);
    this.message = map(obj.message);
    this.description = map(obj.description);
    this.retryHint = map(obj.retryHint);
  }
}

export default EncodingErrorDefinition;

