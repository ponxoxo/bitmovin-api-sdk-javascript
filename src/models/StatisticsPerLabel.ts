import {map, mapArray} from '../common/Mapper';
import BillableEncodingFeatureMinutes from './BillableEncodingFeatureMinutes';
import BillableEncodingMinutes from './BillableEncodingMinutes';
import EgressInformation from './EgressInformation';
import Statistics from './Statistics';

/**
 * @export
 * @class StatisticsPerLabel
 */
export class StatisticsPerLabel extends Statistics {
  /**
   * An optional error message, when the event is in error state (occurs at event: ERROR) (required)
   * @type {string}
   * @memberof StatisticsPerLabel
   */
  public label?: string;

  /**
   * The billable minutes.
   * @type {number}
   * @memberof StatisticsPerLabel
   */
  public billableMinutes?: number;

  /**
   * Billable minutes for each encoding configuration
   * @type {BillableEncodingMinutes[]}
   * @memberof StatisticsPerLabel
   */
  public billableEncodingMinutes?: BillableEncodingMinutes[];

  /**
   * Billable minutes for muxings.
   * @type {number}
   * @memberof StatisticsPerLabel
   */
  public billableTransmuxingMinutes?: number;

  /**
   * Billable minutes for features
   * @type {BillableEncodingFeatureMinutes[]}
   * @memberof StatisticsPerLabel
   */
  public billableFeatureMinutes?: BillableEncodingFeatureMinutes[];

  /**
   * Billable egress output
   * @type {EgressInformation[]}
   * @memberof StatisticsPerLabel
   */
  public billableEgressBytes?: EgressInformation[];

  constructor(obj?: Partial<StatisticsPerLabel>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.label = map(obj.label);
    this.billableMinutes = map(obj.billableMinutes);
    this.billableEncodingMinutes = mapArray(obj.billableEncodingMinutes, BillableEncodingMinutes);
    this.billableTransmuxingMinutes = map(obj.billableTransmuxingMinutes);
    this.billableFeatureMinutes = mapArray(obj.billableFeatureMinutes, BillableEncodingFeatureMinutes);
    this.billableEgressBytes = mapArray(obj.billableEgressBytes, EgressInformation);
  }
}

export default StatisticsPerLabel;

