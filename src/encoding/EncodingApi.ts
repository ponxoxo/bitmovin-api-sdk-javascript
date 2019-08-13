import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import InputsApi from './inputs/InputsApi';
import OutputsApi from './outputs/OutputsApi';
import ConfigurationsApi from './configurations/ConfigurationsApi';
import FiltersApi from './filters/FiltersApi';
import EncodingsApi from './encodings/EncodingsApi';
import ManifestsApi from './manifests/ManifestsApi';
import InfrastructureApi from './infrastructure/InfrastructureApi';
import StatisticsApi from './statistics/StatisticsApi';
import ErrorDefinitionsApi from './errorDefinitions/ErrorDefinitionsApi';
import {getType, map} from '../common/Mapper';

/**
 * EncodingApi - object-oriented interface
 * @export
 * @class EncodingApi
 * @extends {BaseAPI}
 */
export default class EncodingApi extends BaseAPI {
  public inputs: InputsApi;
  public outputs: OutputsApi;
  public configurations: ConfigurationsApi;
  public filters: FiltersApi;
  public encodings: EncodingsApi;
  public manifests: ManifestsApi;
  public infrastructure: InfrastructureApi;
  public statistics: StatisticsApi;
  public errorDefinitions: ErrorDefinitionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.inputs = new InputsApi(configuration);
    this.outputs = new OutputsApi(configuration);
    this.configurations = new ConfigurationsApi(configuration);
    this.filters = new FiltersApi(configuration);
    this.encodings = new EncodingsApi(configuration);
    this.manifests = new ManifestsApi(configuration);
    this.infrastructure = new InfrastructureApi(configuration);
    this.statistics = new StatisticsApi(configuration);
    this.errorDefinitions = new ErrorDefinitionsApi(configuration);
  }
}