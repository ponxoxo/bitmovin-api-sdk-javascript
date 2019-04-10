import {map} from '../common/Mapper';

/**
 * @export
 * @class ObjectDetectionBoundingBox
 */
export default class ObjectDetectionBoundingBox {
  constructor(obj: any) {
    this.topLeftX = map(obj.topLeftX);
    this.topLeftY = map(obj.topLeftY);
    this.bottomRightX = map(obj.bottomRightX);
    this.bottomRightY = map(obj.bottomRightY);
  }

  /**
   * Horizontal position of the top left corner, given as a fraction of the frame width
   * @type {number}
   * @memberof ObjectDetectionBoundingBox
   */
  public topLeftX?: number;
  /**
   * Vertical position of the top left corner, given as a fraction of the frame height
   * @type {number}
   * @memberof ObjectDetectionBoundingBox
   */
  public topLeftY?: number;
  /**
   * Horizontal position of the bottom right corner, given as a fraction of the frame width
   * @type {number}
   * @memberof ObjectDetectionBoundingBox
   */
  public bottomRightX?: number;
  /**
   * Vertical position of the bottom right corner, given as a fraction of the frame height
   * @type {number}
   * @memberof ObjectDetectionBoundingBox
   */
  public bottomRightY?: number;
}
