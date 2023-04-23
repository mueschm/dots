export interface ICreateApiClientInput {
    endpoint?: string;
    requestTimeoutInMs?: number;
    token: string;
}
export declare const createApiClient: ({ createContext, modules, }: {
    createContext: typeof import('../create-context/create-context').createContext;
    modules: typeof import('../../modules');
}) => ({ endpoint, requestTimeoutInMs, token, }: ICreateApiClientInput) => Readonly<{
    _options: Readonly<{
        endpoint: string | undefined;
        requestTimeoutInMs: number | undefined;
    }>;
    account: Readonly<{
        getAccount: () => Promise<Readonly<import("../../account").GetAccountResponse>>;
    }>;
    action: Readonly<{
        getAction: ({ action_id, }: import("../../action").IGetActionApiRequest) => Promise<Readonly<import("../../action").GetActionResponse>>;
        listActions: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../action").ListActionsResponse>>;
    }>;
    app: Readonly<{
        cancelAppDeployment: ({ app_id, deployment_id, }: import("../../app").ICancelAppDeploymentApiRequest) => Promise<Readonly<import("../../app").CancelAppDeploymentResponse>>;
        createApp: ({ project_id, spec, }: import("../../app").ICreateAppApiRequest) => Promise<Readonly<import("../../app").CreateAppResponse>>;
        createAppDeployment: ({ app_id, force_build, }: import("../../app").ICreateAppDeploymentApiRequest) => Promise<Readonly<import("../../app").CreateAppDeploymentResponse>>;
        deleteApp: ({ app_id, }: import("../../app").IDeleteAppApiRequest) => Promise<Readonly<import("../../app").DeleteAppResponse>>;
        getAggregatedAppDeploymentLogs: ({ app_id, component_name, deployment_id, follow, pod_connection_timeout, type, }: import("../../app").IGetAggregatedAppDeploymentLogsApiRequest) => Promise<Readonly<import("../../app").GetAggregatedAppDeploymentLogsResponse>>;
        getApp: ({ app_id, }: import("../../app").IGetAppApiRequest) => Promise<Readonly<import("../../app").GetAppResponse>>;
        getAppDeployment: ({ app_id, deployment_id, }: import("../../app").IGetAppDeploymentApiRequest) => Promise<Readonly<import("../../app").GetAppDeploymentResponse>>;
        getAppDeploymentLogs: ({ app_id, component_name, deployment_id, follow, pod_connection_timeout, type, }: import("../../app").IGetAppDeploymentLogsApiRequest) => Promise<Readonly<import("../../app").GetAppDeploymentLogsResponse>>;
        listAppDeployments: ({ app_id, page, per_page, }: import("../../app").IListAppDeploymentsApiRequest) => Promise<Readonly<import("../../app").ListAppDeploymentsResponse>>;
        listApps: ({ page, per_page, with_projects, }: import("../../app").IListAppApiRequest) => Promise<Readonly<import("../../app").ListAppsResponse>>;
        runAppDetection: ({ commit_sha, component_type, git, github, }: import("../../app").IRunAppDetectionApiRequest) => Promise<Readonly<import("../../app").RunAppDetectionResponse>>;
        updateApp: ({ app_id, spec, }: import("../../app").IUpdateAppApiRequest) => Promise<Readonly<import("../../app").UpdateAppResponse>>;
    }>;
    cdnEndpoint: Readonly<{
        createCdnEndpoint: ({ origin, ttl, certificate_id, custom_domain, }: import("../../cdn-endpoint").ICreateCdnEndpointApiRequest) => Promise<Readonly<import("../../cdn-endpoint").CreateCdnEndpointResponse>>;
        getCdnEndpoint: ({ cdn_endpoint_id, }: import("../../cdn-endpoint").IGetCdnEndpointApiRequest) => Promise<Readonly<import("../../cdn-endpoint").GetCdnEndpointResponse>>;
        listCdnEndpoints: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../cdn-endpoint").ListCdnEndpointsResponse>>;
        deleteCdnEndpoint: ({ cdn_endpoint_id, }: import("../../cdn-endpoint").IDeleteCdnEndpointApiRequest) => Promise<Readonly<import("../../cdn-endpoint").DeleteCdnEndpointResponse>>;
        updateCdnEndpoint: ({ cdn_endpoint_id, ttl, certificate_id, custom_domain, }: import("../../cdn-endpoint").IUpdateCdnEndpointApiRequest) => Promise<Readonly<import("../../cdn-endpoint").UpdateCdnEndpointResponse>>;
        purgeCache: ({ cdn_endpoint_id, files, }: import("../../cdn-endpoint").IPurgeCacheApiRequest) => Promise<Readonly<import("../../cdn-endpoint").PurgeCacheResponse>>;
    }>;
    certificate: Readonly<{
        listCertificates: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../certificate").ListCertificatesResponse>>;
        getCertificate: ({ certificate_id, }: import("../../certificate").IGetCertificateApiRequest) => Promise<Readonly<import("../../certificate").GetCertificateResponse>>;
        deleteCertificate: ({ certificate_id, }: import("../../certificate").IDeleteCertificateApiRequest) => Promise<Readonly<import("../../certificate").DeleteCertificateResponse>>;
        createCertificate: ({ certificate_chain, dns_names, leaf_certificate, name, private_key, type, }: import("../../certificate").ICreateCertificateApiRequest) => Promise<Readonly<import("../../certificate").CreateCertificateResponse>>;
    }>;
    containerRegistry: Readonly<{
        configureRegistry: ({ name, }: import("../../container-registry").IConfigureRegistryApiRequest) => Promise<Readonly<import("../../container-registry").ConfigureRegistryResponse>>;
        deleteRegistry: () => Promise<Readonly<import("../../container-registry").DeleteRegistryResponse>>;
        getDockerCredentials: ({ can_write, expiry_seconds, }: import("../../container-registry").IGetDockerCredentialsApiRequest) => Promise<Readonly<import("../../container-registry").GetDockerCredentialsResponse>>;
        getRegistry: () => Promise<Readonly<import("../../container-registry").GetRegistryResponse>>;
    }>;
    customer: Readonly<{
        downloadInvoice: ({ invoice_uuid, format, }: import("../../customer").IDownloadInvoiceApiRequest) => Promise<Readonly<import("../../customer").DownloadInvoiceResponse>>;
        getBalance: () => Promise<Readonly<import("../../customer").GetBalanceResponse>>;
        getInvoiceSummary: ({ invoice_uuid, }: import("../../customer").IGetInvoiceSummaryApiRequest) => Promise<Readonly<import("../../customer").GetInvoiceSummaryResponse>>;
        listBillingHistory: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../customer").ListBillingHistoryResponse>>;
        listInvoiceItems: ({ invoice_uuid, page, per_page, }: import("../../customer").IListInvoiceItemsApiRequest) => Promise<Readonly<import("../../customer").ListInvoiceItemsResponse>>;
        listInvoices: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../customer").ListInvoicesResponse>>;
    }>;
    database: Readonly<{
        configureDatabaseClusterEvictionPolicy: ({ database_cluster_id, eviction_policy, }: import("../../database").IConfigureDatabaseClusterEvictionPolicyApiRequest) => Promise<Readonly<import("../../database").ConfigureDatabaseClusterEvictionPolicyResponse>>;
        configureDatabaseClusterMaintenanceWindow: ({ database_cluster_id, day, hour, }: import("../../database").IConfigureDatabaseClusterMaintenanceWindowApiRequest) => Promise<Readonly<import("../../database").ConfigureDatabaseClusterMaintenanceWindowResponse>>;
        configureDatabaseClusterSqlModes: ({ database_cluster_id, sql_mode, }: import("../../database").IConfigureDatabaseClusterSqlModeApiRequest) => Promise<Readonly<import("../../database").ConfigureDatabaseClusterSqlModeResponse>>;
        createConnectionPool: ({ database_cluster_id, db_name, mode, pool_name, size, user_name, }: import("../../database").ICreateConnectionPoolApiRequest) => Promise<Readonly<import("../../database").CreateConnectionPoolResponse>>;
        createDatabaseCluster: ({ engine, name, num_nodes, private_network_uuid, region, size, tags, version, }: import("../../database").ICreateDatabaseClusterApiRequest) => Promise<Readonly<import("../../database").CreateDatabaseClusterResponse>>;
        createDatabaseClusterDb: ({ database_cluster_id, db_name, }: import("../../database").ICreateDatabaseDbApiRequest) => Promise<Readonly<import("../../database").CreateDatabaseDbResponse>>;
        createDatabaseClusterUser: ({ database_cluster_id, mysql_settings, user_name, }: import("../../database").ICreateDatabaseClusterUserApiRequest) => Promise<Readonly<import("../../database").CreateDatabaseClusterUserResponse>>;
        createReadOnlyReplica: ({ database_cluster_id, name, region, size, tags, }: import("../../database").ICreateReadOnlyReplicaApiRequest) => Promise<Readonly<import("../../database").CreateReadOnlyReplicaResponse>>;
        deleteConnectionPool: ({ database_cluster_id, pool_name, }: import("../../database").IDeleteConnectionPoolApiRequest) => Promise<Readonly<import("../../database").DeleteConnectionPoolResponse>>;
        deleteDatabaseClusterDb: ({ database_cluster_id, db_name, }: import("../../database").IDeleteDatabaseClusterDbApiRequest) => Promise<Readonly<import("../../database").DeleteDatabaseClusterDbResponse>>;
        destroyDatabaseCluster: ({ database_cluster_id, }: import("../../database").IDestroyDatabaseClusterApiRequest) => Promise<Readonly<import("../../database").DestroyDatabaseClusterResponse>>;
        destroyReadOnlyReplica: ({ database_cluster_id, read_only_replica_name, }: import("../../database").IDestroyReadOnlyReplicaApiRequest) => Promise<Readonly<import("../../database").DestroyReadOnlyReplicaResponse>>;
        getConnectionPool: ({ database_cluster_id, pool_name, }: import("../../database").IGetConnectionPoolApiRequest) => Promise<Readonly<import("../../database").GetConnectionPoolResponse>>;
        getDatabaseCluster: ({ database_cluster_id, }: import("../../database").IGetDatabaseClusterApiRequest) => Promise<Readonly<import("../../database").GetDatabaseClusterResponse>>;
        getDatabaseClusterDb: ({ database_cluster_id, db_name, }: import("../../database").IGetDatabaseClusterDbApiRequest) => Promise<Readonly<import("../../database").GetDatabaseClusterDbResponse>>;
        getDatabaseClusterEvictionPolicy: ({ database_cluster_id, }: import("../../database").IGetDatabaseClusterEvictionPolicyApiRequest) => Promise<Readonly<import("../../database").GetDatabaseClusterEvictionPolicyResponse>>;
        getDatabaseClusterSqlMode: ({ database_cluster_id, }: import("../../database").IGetDatabaseClusterSqlModeApiRequest) => Promise<Readonly<import("../../database").GetDatabaseClusterSqlModeResponse>>;
        getDatabaseClusterUser: ({ database_cluster_id, user_name, }: import("../../database").IGetDatabaseClusterUserApiRequest) => Promise<Readonly<import("../../database").GetDatabaseClusterUserResponse>>;
        getReadOnlyReplica: ({ database_cluster_id, read_only_replica_name, }: import("../../database").IGetReadOnlyReplicaApiRequest) => Promise<Readonly<import("../../database").GetReadOnlyReplicaResponse>>;
        listConnectionPools: ({ page, per_page, database_cluster_id, }: import("../../database").IListdConnectionPoolsApiRequest) => Promise<Readonly<import("../../database").ListdConnectionPoolsResponse>>;
        listDatabaseClusterBackups: ({ page, per_page, database_cluster_id, }: import("../../database").IListDatabaseClusterBackupsApiRequest) => Promise<Readonly<import("../../database").ListDatabaseClusterBackupsResponse>>;
        listDatabaseClusterDbs: ({ page, per_page, database_cluster_id, }: import("../../database").IListDatabaseClusterDbsApiRequest) => Promise<Readonly<import("../../database").ListDatabaseClusterDbsResponse>>;
        listDatabaseClusterFirewallRules: ({ page, per_page, database_cluster_id, }: import("../../database").IListDatabaseClusterFirewallRulesApiRequest) => Promise<Readonly<import("../../database").ListDatabaseClusterFirewallRulesResponse>>;
        listDatabaseClusters: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../database").ListDatabaseClusterResponse>>;
        listDatabaseClusterUsers: ({ page, per_page, database_cluster_id, }: import("../../database").IListDatabaseClusterUsersApiRequest) => Promise<Readonly<import("../../database").ListDatabaseClusterUsersResponse>>;
        listDatabaseOptions: () => Promise<Readonly<import("../../database").ListDatabaseOptionsResponse>>;
        listReadOnlyReplicas: ({ page, per_page, database_cluster_id, }: import("../../database").IListReadOnlyReplicasApiRequest) => Promise<Readonly<import("../../database").ListReadOnlyReplicasResponse>>;
        migrateDatabaseCluster: ({ database_cluster_id, region, }: import("../../database").IMigrateDatabaseClusterApiRequest) => Promise<Readonly<import("../../database").MigrateDatabaseClusterResponse>>;
        removeDatabaseClusterUser: ({ database_cluster_id, user_name, }: import("../../database").IRemoveDatabaseClusterUserApiRequest) => Promise<Readonly<import("../../database").RemoveDatabaseClusterUserResponse>>;
        resizeDatabaseCluster: ({ database_cluster_id, num_nodes, size, }: import("../../database").IResizeDatabaseClusterApiRequest) => Promise<Readonly<import("../../database").ResizeDatabaseClusterResponse>>;
        restoreDatabaseClusterBackup: ({ backup_restore, engine, name, num_nodes, region, size, tags, version, }: import("../../database").IRestoreDatabaseClusterBackupApiRequest) => Promise<Readonly<import("../../database").RestoreDatabaseClusterBackupResponse>>;
        updateDatabaseClusterFirewallRules: ({ database_cluster_id, rules, }: import("../../database").IUpdateDatabaseClusterFirewallRulesApiRequest) => Promise<Readonly<import("../../database").UpdateDatabaseClusterFirewallRulesResponse>>;
    }>;
    domain: Readonly<{
        createDomain: ({ ip_address, name, }: import("../../domain").ICreateDomainApiRequest) => Promise<Readonly<import("../../domain").CreateDomainResponse>>;
        createDomainRecord: ({ domain_name, data, flags, name, port, priority, tag, ttl, type, weight, }: import("../../domain").ICreateDomainRecordApiRequest) => Promise<Readonly<import("../../domain").CreateDomainRecordResponse>>;
        deleteDomain: ({ name, }: import("../../domain").IDeleteDomainApiRequest) => Promise<Readonly<import("../../domain").DeleteDomainResponse>>;
        deleteDomainRecord: ({ domain_name, domain_record_id, }: import("../../domain").IDeleteDomainRecordApiRequest) => Promise<Readonly<import("../../domain").DeleteDomainRecordResponse>>;
        getDomain: ({ name, }: import("../../domain").IGetDomainApiRequest) => Promise<Readonly<import("../../domain").GetDomainResponse>>;
        getDomainRecord: ({ domain_name, domain_record_id, }: import("../../domain").IGetDomainRecordApiRequest) => Promise<Readonly<import("../../domain").GetDomainRecordResponse>>;
        listDomainRecords: ({ domain_name, name, page, per_page, type, }: import("../../domain").IListDomainRecordsRequest) => Promise<Readonly<import("../../domain").ListDomainRecordsResponse>>;
        listDomains: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../domain").ListDomainsResponse>>;
        updateDomainRecord: ({ data, domain_name, domain_record_id, flags, name, port, priority, tag, ttl, type, weight, }: import("../../domain").IUpdateDomainRecordApiRequest) => Promise<Readonly<import("../../domain").UpdateDomainRecordResponse>>;
    }>;
    droplet: Readonly<{
        changeDropletKernel: ({ droplet_id, kernel, }: import("../../droplet").IChangeDropletKernelApiRequest) => Promise<Readonly<import("../../droplet").ChangeDropletKernelResponse>>;
        createDroplet: ({ backups, image, ipv6, monitoring, name, private_networking, region, size, ssh_keys, tags, user_data, volumes, vpc_uuid, }: import("../../droplet").ICreateDropletApiRequest) => Promise<Readonly<import("../../droplet").CreateDropletResponse>>;
        createDroplets: ({ backups, image, ipv6, monitoring, names, private_networking, region, size, ssh_keys, tags, user_data, volumes, vpc_uuid, }: import("../../droplet").ICreateDropletsApiRequest) => Promise<Readonly<import("../../droplet").CreateDropletsResponse>>;
        deleteDroplet: ({ droplet_id, }: import("../../droplet").IDeleteDropletApiRequest) => Promise<Readonly<import("../../droplet").DeleteDropletResponse>>;
        deleteDropletsByTag: ({ tag_name, }: import("../../droplet").IDeleteDropletByTagApiRequest) => Promise<Readonly<import("../../droplet").DeleteDropletByTagResponse>>;
        destroyDropletAndAllAssociatedResources: ({ acknowledge, droplet_id, }: import("../../droplet").IdestroyDropletAndAllAssociatedResourcesApiRequest) => Promise<Readonly<import("../../droplet").destroyDropletAndAllAssociatedResourcesResponse>>;
        destroyDropletAndAssociatedResources: ({ droplet_id, snapshots, volume_snapshots, volumes, }: import("../../droplet").IdestroyDropletAndAssociatedResourcesApiRequest) => Promise<Readonly<import("../../droplet").destroyDropletAndAssociatedResourcesResponse>>;
        disableDropletBackups: ({ droplet_id, }: import("../../droplet").IDisableDropletBackupsApiRequest) => Promise<Readonly<import("../../droplet").DisableDropletBackupsResponse>>;
        doActionByDropletTag: ({ tag_name, type, }: import("../../droplet").IDoActionByDropletTagApiRequest) => Promise<Readonly<import("../../droplet").DoActionByDropletTagResponse>>;
        enableDropletBackups: ({ droplet_id, }: import("../../droplet").IEnableDropletBackupsApiRequest) => Promise<Readonly<import("../../droplet").EnableDropletBackupsResponse>>;
        enableDropletIpv6: ({ droplet_id, }: import("../../droplet").IEnableDropletIpv6ApiRequest) => Promise<Readonly<import("../../droplet").EnableDropletIpv6Response>>;
        enableDropletPrivateNetworking: ({ droplet_id, }: import("../../droplet").IEnableDropletPrivateNetworkingApiRequest) => Promise<Readonly<import("../../droplet").EnableDropletPrivateNetworkingResponse>>;
        getDroplet: ({ droplet_id, }: import("../../droplet").IGetDropletApiRequest) => Promise<Readonly<import("../../droplet").GetDropletResponse>>;
        getDropletAction: ({ action_id, droplet_id, }: import("../../droplet").IGetDropletActionApiRequest) => Promise<Readonly<import("../../droplet").GetDropletActionResponse>>;
        getDropletDestroyStatus: ({ droplet_id, }: import("../../droplet").IGetDropletDestroyStatusApiRequest) => Promise<Readonly<import("../../droplet").GetDropletDestroyStatusResponse>>;
        listDropletActions: ({ droplet_id, page, per_page, }: import("../../droplet").IListDropletActionsApiRequest) => Promise<Readonly<import("../../droplet").ListDropletActionsResponse>>;
        listDropletAssociatedResources: ({ droplet_id, }: import("../../droplet").IListDropletAssociatedResourcesApiRequest) => Promise<Readonly<import("../../droplet").ListDropletAssociatedResourcesResponse>>;
        listDropletBackups: ({ droplet_id, page, per_page, }: import("../../droplet").IListDropletBackupsApiRequest) => Promise<Readonly<import("../../droplet").ListDropletBackupsResponse>>;
        listDropletKernels: ({ droplet_id, page, per_page, }: import("../../droplet").IListDropletKernelsApiRequest) => Promise<Readonly<import("../../droplet").ListDropletKernelsResponse>>;
        listDropletNeighborhoods: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../droplet").ListDropletNeighborhoodsResponse>>;
        listDropletNeighbors: ({ droplet_id, page, per_page, }: import("../../droplet").IListDropletNeighborsApiRequest) => Promise<Readonly<import("../../droplet").ListDropletNeighborsResponse>>;
        listDroplets: ({ page, per_page, tag_name, }: import("../../droplet").IListDropletsApiRequest) => Promise<Readonly<import("../../droplet").ListDropletsResponse>>;
        listDropletSnapshots: ({ droplet_id, page, per_page, }: import("../../droplet").IListDropletSnapshotsApiRequest) => Promise<Readonly<import("../../droplet").ListDropletSnapshotsResponse>>;
        powerCycleDroplet: ({ droplet_id, }: import("../../droplet").IPowerCycleDropletApiRequest) => Promise<Readonly<import("../../droplet").PowerCycleDropletResponse>>;
        powerOffDroplet: ({ droplet_id, }: import("../../droplet").IPowerOffDropletApiRequest) => Promise<Readonly<import("../../droplet").PowerOffDropletResponse>>;
        powerOnDroplet: ({ droplet_id, }: import("../../droplet").IPowerOnDropletApiRequest) => Promise<Readonly<import("../../droplet").PowerOnDropletResponse>>;
        rebootDroplet: ({ droplet_id, }: import("../../droplet").IRebootDropletApiRequest) => Promise<Readonly<import("../../droplet").RebootDropletResponse>>;
        rebuildDroplet: ({ droplet_id, image, }: import("../../droplet").IRebuildDropletApiRequest) => Promise<Readonly<import("../../droplet").RebuildDropletResponse>>;
        renameDroplet: ({ droplet_id, name, }: import("../../droplet").IRenameDropletApiRequest) => Promise<Readonly<import("../../droplet").RenameDropletResponse>>;
        resetDropletPassword: ({ droplet_id, }: import("../../droplet").IResetDropletPasswordApiRequest) => Promise<Readonly<import("../../droplet").ResetDropletPasswordResponse>>;
        resizeDroplet: ({ disk, droplet_id, size, }: import("../../droplet").IResizeDropletApiRequest) => Promise<Readonly<import("../../droplet").ResizeDropletResponse>>;
        restoreDroplet: ({ droplet_id, image, }: import("../../droplet").IRestoreDropletApiRequest) => Promise<Readonly<import("../../droplet").RestoreDropletResponse>>;
        retryDropletDestroy: ({ droplet_id, }: import("../../droplet").IRetryDropletDestroyApiRequest) => Promise<Readonly<import("../../droplet").RetryDropletDestroyResponse>>;
        shutdownDroplet: ({ droplet_id, }: import("../../droplet").IShutdownDropletApiRequest) => Promise<Readonly<import("../../droplet").ShutdownDropletResponse>>;
        snapshotDroplet: ({ droplet_id, name, }: import("../../droplet").ISnapshotDropletApiRequest) => Promise<Readonly<import("../../droplet").SnapshotDropletResponse>>;
    }>;
    firewall: Readonly<{
        addDropletsToFirewall: ({ droplet_ids, firewall_id, }: import("../../firewall").IAddDropletsToFirewallApiRequest) => Promise<Readonly<import("../../firewall").AddDropletsToFirewallResponse>>;
        addRulesToFirewall: ({ firewall_id, inbound_rules, outbound_rules, }: import("../../firewall").IAddRulesToFirewallApiRequest) => Promise<Readonly<import("../../firewall").AddRulesToFirewallResponse>>;
        addTagsToFirewall: ({ firewall_id, tags, }: import("../../firewall").IAddTagsToFirewallApiRequest) => Promise<Readonly<import("../../firewall").AddTagsToFirewallResponse>>;
        createFirewall: ({ droplet_ids, inbound_rules, name, outbound_rules, tags, }: import("../../firewall").IFirewall) => Promise<Readonly<import("../../firewall").CreateFirewallResponse>>;
        deleteFirewall: ({ firewall_id, }: import("../../firewall").IDeleteFirewallApiRequest) => Promise<Readonly<import("../../firewall").DeleteFirewallResponse>>;
        getFirewall: ({ firewall_id, }: import("../../firewall").IGetFirewallApiRequest) => Promise<Readonly<import("../../firewall").GetFirewallResponse>>;
        listFirewalls: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../firewall").ListFirewallsResponse>>;
        removeDropletsFromFirewall: ({ droplet_ids, firewall_id, }: import("../../firewall").IRemoveDropletsFromFirewallApiRequest) => Promise<Readonly<import("../../firewall").RemoveDropletsFromFirewallResponse>>;
        removeRulesFromFirewall: ({ firewall_id, inbound_rules, outbound_rules, }: import("../../firewall").IRemoveRulesFromFirewallApiRequest) => Promise<Readonly<import("../../firewall").RemoveRulesFromFirewallResponse>>;
        removeTagsFromFirewall: ({ firewall_id, tags, }: import("../../firewall").IRemoveTagsFromFirewallApiRequest) => Promise<Readonly<import("../../firewall").RemoveTagsFromFirewallResponse>>;
        updateFirewall: ({ droplet_ids, id, inbound_rules, name, outbound_rules, tags, }: import("../../firewall").IFirewall) => Promise<Readonly<import("../../firewall").UpdateFirewallResponse>>;
    }>;
    floatingIp: Readonly<{
        assignIpToDroplet: ({ droplet_id, ip, }: import("../../floating-ip").IAssignIpToDropletApiRequest) => Promise<Readonly<import("../../floating-ip").AssignIpToDropletResponse>>;
        createFloatingIp: (body: import("../../floating-ip").CreateFloatingIpApiRequest) => Promise<Readonly<import("../../floating-ip").CreateFloatingIpResponse>>;
        deleteFloatingIp: ({ ip, }: import("../../floating-ip").IDeleteFloatingIpApiRequest) => Promise<Readonly<import("../../floating-ip").DeleteFloatingIpResponse>>;
        getFloatingIp: ({ ip, }: import("../../floating-ip").IGetFloatingIpApiRequest) => Promise<Readonly<import("../../floating-ip").GetFloatingIpResponse>>;
        getFloatingIpAction: ({ action_id, ip, }: import("../../floating-ip").IGetFloatingIpActionApiRequest) => Promise<Readonly<import("../../floating-ip").GetFloatingIpActionResponse>>;
        listFloatingIpActions: ({ ip, page, per_page, }: import("../../floating-ip").IListFloatingIpActionsApiRequest) => Promise<Readonly<import("../../floating-ip").ListFloatingIpActionssResponse>>;
        listFloatingIps: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../floating-ip").ListFloatingIpssResponse>>;
        unassignIpFromDroplet: ({ ip, }: import("../../floating-ip").IUnassignIpFromDropletApiRequest) => Promise<Readonly<import("../../floating-ip").UnassignIpFromDropletResponse>>;
    }>;
    image: Readonly<{
        convertImageToSnapshot: ({ image_id, }: import("../../image").IConvertImageToSnapshotApiRequest) => Promise<Readonly<import("../../image").ConvertImageToSnapshotRes>>;
        createCustomImage: ({ description, distribution, name, region, tags, url, }: import("../../image").ICreateCustomImageApiRequest) => Promise<Readonly<import("../../image").CreateCustomImageRes>>;
        deleteImage: ({ image_id, }: import("../../image").IDeleteImageApiRequest) => Promise<Readonly<import("../../image").DeleteImageRes>>;
        getImageAction: ({ image_id, action_id, }: import("../../image").IGetImageActionApiRequest) => Promise<Readonly<import("../../image").GetImageActionResponse>>;
        getImage: ({ image_id, slug, }: import("../../image").IGetImageApiRequest) => Promise<Readonly<import("../../image").GetImageResponse>>;
        listImageActions: ({ page, per_page, image_id, }: import("../../image").IListImageActionsApiRequest) => Promise<Readonly<import("../../image").ListImageActionsResponse>>;
        listImages: ({ page, per_page, tag_name, type, user_images, }: import("../../image").IListImageApiRequest) => Promise<Readonly<import("../../image").ListImagesResponse>>;
        transferImage: ({ image_id, region, }: import("../../image").ITransferImageApiRequest) => Promise<Readonly<import("../../image").TransferImageRes>>;
        updateImage: ({ description, distribution, image_id, name, }: import("../../image").IUpdateImageApiRequest) => Promise<Readonly<import("../../image").UpdateImageRes>>;
    }>;
    kubernetes: Readonly<{
        addContainerRegistry: ({ cluster_uuids, }: import("../../kubernetes").IAddContainerRegistryApiRequest) => Promise<Readonly<import("../../kubernetes").AddContainerRegistryResponse>>;
        createKubernetesCluster: ({ name, region, version, tags, auto_upgrade, maintenance_policy, node_pools, vpc_uuid, }: import("../../kubernetes").ICreateKubernetesClusterApiRequest) => Promise<Readonly<import("../../kubernetes").CreateKubernetesClusterResponse>>;
        createNodePool: ({ auto_scale, count, kubernetes_cluster_id, labels, max_nodes, min_nodes, name, size, tags, taints, }: import("../../kubernetes").ICreateNodePoolApiRequest) => Promise<Readonly<import("../../kubernetes").CreateNodePoolResponse>>;
        deleteKubernetesCluster: ({ kubernetes_cluster_id, }: import("../../kubernetes").IDeleteKubernetesClusterApiRequest) => Promise<Readonly<import("../../kubernetes").DeleteKubernetesClusterResponse>>;
        deleteNode: ({ kubernetes_cluster_id, node_pool_id, node_id, drain_node, replace_node, }: import("../../kubernetes").IDeleteNodeApiRequest) => Promise<Readonly<import("../../kubernetes").DeleteNodeResponse>>;
        deleteNodePool: ({ kubernetes_cluster_id, node_pool_id, }: import("../../kubernetes").IDeleteNodePoolApiRequest) => Promise<Readonly<import("../../kubernetes").DeleteNodePoolResponse>>;
        getClusterlintDiagnostics: ({ kubernetes_cluster_id, }: import("../../kubernetes").IGetClusterlintDiagnosticsApiRequest) => Promise<Readonly<import("../../kubernetes").GetClusterlintDiagnosticsResponse>>;
        getKubernetesCluster: ({ kubernetes_cluster_id, }: import("../../kubernetes").IGetKubernetesClusterApiRequest) => Promise<Readonly<import("../../kubernetes").GetKubernetesClusterResponse>>;
        getKubernetesClusterCredentials: ({ kubernetes_cluster_id, expiration_in_seconds, }: import("../../kubernetes").IGetKubernetesClusterCredentialsApiRequest) => Promise<Readonly<import("../../kubernetes").GetKubernetesClusterCredentialsResponse>>;
        getKubernetesClusterKubeconfig: ({ kubernetes_cluster_id, expiration_in_seconds, }: import("../../kubernetes").IGetKubernetesClusterKubeconfigApiRequest) => Promise<Readonly<import("../../kubernetes").GetKubernetesClusterKubeconfigResponse>>;
        getNodePool: ({ kubernetes_cluster_id, node_pool_id, }: import("../../kubernetes").IGetNodePoolApiRequest) => Promise<Readonly<import("../../kubernetes").GetNodePoolResponse>>;
        listAvailableOptionsOfKubernetes: () => Promise<Readonly<import("../../kubernetes").ListAvailableOptionsOfKubernetesResponse>>;
        listKubernetesClusterAvailableUpgrades: ({ kubernetes_cluster_id, }: import("../../kubernetes").IListKubernetesClusterAvailableUpgradesApiRequest) => Promise<Readonly<import("../../kubernetes").ListKubernetesClusterAvailableUpgradesResponse>>;
        listKubernetesClusters: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../kubernetes").ListKubernetesClusterResponse>>;
        listNodePools: ({ kubernetes_cluster_id, page, per_page, }: import("../../kubernetes").IListNodePoolsApiRequest) => Promise<Readonly<import("../../kubernetes").ListNodePoolsResponse>>;
        removeContainerRegistry: ({ cluster_uuids, }: import("../../kubernetes").IRemoveContainerRegistryApiRequest) => Promise<Readonly<import("../../kubernetes").RemoveContainerRegistryResponse>>;
        runClusterlintOnKubernetesCluster: ({ kubernetes_cluster_id, include_groups, include_checks, exclude_groups, exclude_checks, }: import("../../kubernetes").IRunClusterlintOnKubernetesClusterRequest) => Promise<Readonly<import("../../kubernetes").RunClusterlintResponse>>;
        updateKubernetesCluster: ({ auto_upgrade, kubernetes_cluster_id, maintenance_policy, name, tags, }: import("../../kubernetes").IUpdateKubernetesClusterApiRequest) => Promise<Readonly<import("../../kubernetes").UpdateKubernetesClusterResponse>>;
        updateNodePool: ({ auto_scale, count, kubernetes_cluster_id, labels, max_nodes, min_nodes, name, node_pool_id, tags, taints, }: import("../../kubernetes").IUpdateNodePoolApiRequest) => Promise<Readonly<import("../../kubernetes").UpdateNodePoolResponse>>;
        upgradeKubernetesCluster: ({ kubernetes_cluster_id, version, }: import("../../kubernetes").IUpgradeKubernetesClusterApiRequest) => Promise<Readonly<import("../../kubernetes").UpgradeKubernetesClusterResponse>>;
    }>;
    loadBalancer: Readonly<{
        addDropletsToLoadBalancer: ({ droplet_ids, load_balancer_id, }: import("../../load-balancer").IAddDropletsToLoadBalancerApiRequest) => Promise<Readonly<import("../../load-balancer").AddDropletsToLoadBalancerResponse>>;
        addRulesToLoadBalancer: ({ forwarding_rules, load_balancer_id, }: import("../../load-balancer").IAddRulesToLoadBalancerApiRequest) => Promise<Readonly<import("../../load-balancer").AddRulesToLoadBalancerResponse>>;
        createLoadBalancer: ({ algorithm, droplet_ids, enable_backend_keepalive, enable_proxy_protocol, forwarding_rules, health_check, name, redirect_http_to_https, region, sticky_sessions, tag, vpc_uuid, }: import("../../load-balancer").ICreateLoadBalancerApiRequest) => Promise<Readonly<import("../../load-balancer").CreateLoadBalancerResponse>>;
        deleteLoadBalancer: ({ load_balancer_id, }: import("../../load-balancer").IDeleteLoadBalancerApiRequest) => Promise<Readonly<import("../../load-balancer").DeleteLoadBalancerResponse>>;
        getLoadBalancer: ({ load_balancer_id, }: import("../../load-balancer").IGetLoadBalancerApiRequest) => Promise<Readonly<import("../../load-balancer").GetLoadBalancerResponse>>;
        listLoadBalancers: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../load-balancer").ListLoadBalancersResponse>>;
        removeDropletsFromLoadBalancer: ({ droplet_ids, load_balancer_id, }: import("../../load-balancer").IRemoveDropletsFromLoadBalancerApiRequest) => Promise<Readonly<import("../../load-balancer").RemoveDropletsFromLoadBalancerResponse>>;
        removeRulesFromLoadBalancer: ({ forwarding_rules, load_balancer_id, }: import("../../load-balancer").IRemoveRulesFromLoadBalancerApiRequest) => Promise<Readonly<import("../../load-balancer").RemoveRulesFromLoadBalancerResponse>>;
        updateLoadBalancer: ({ algorithm, droplet_ids, enable_proxy_protocol, forwarding_rules, health_check, load_balancer_id, name, redirect_http_to_https, region, sticky_sessions, tag, vpc_uuid, }: import("../../load-balancer").ICustomLoadBalancerPayload) => Promise<Readonly<import("../../load-balancer").UpdateLoadBalancerResponse>>;
    }>;
    monitoring: Readonly<{
        getDropletAvailableMemoryMetrics: ({ end, host_id, start, }: import("../../monitoring").IGetDropletAvailableMemoryMetricsInput) => Promise<Readonly<import("../../monitoring").GetDropletAvailableMemoryMetricsResponse>>;
        getDropletBandwidthMetrics: ({ end, host_id, network_interface, start, traffic_direction, }: import("../../monitoring").IGetDropletBandwidthMetricsInput) => Promise<Readonly<import("../../monitoring").GetDropletBandwidthMetricsResponse>>;
        getDropletCpuMetrics: ({ end, host_id, start, }: import("../../monitoring").IGetDropletCpuMetricsInput) => Promise<Readonly<import("../../monitoring").GetDropletCpuMetricsResponse>>;
        getDropletFreeMemoryMetrics: ({ end, host_id, start, }: import("../../monitoring").IGetDropletFreeMemoryMetricsInput) => Promise<Readonly<import("../../monitoring").GetDropletFreeMemoryMetricsResponse>>;
        getDropletTotalMemoryMetrics: ({ end, host_id, start, }: import("../../monitoring").IGetDropletTotalMemoryMetricsInput) => Promise<Readonly<import("../../monitoring").GetDropletTotalMemoryMetricsResponse>>;
    }>;
    project: Readonly<{
        assignResourcesToDefaultProject: ({ resources, }: import("../../project").IAssignResourcesToDefaultProjectApiRequest) => Promise<Readonly<import("../../project").AssignResourcesToDefaultProjectResponse>>;
        assignResourcesToProject: ({ project_id, resources, }: import("../../project").IAssignResourcesToProjectApiRequest) => Promise<Readonly<import("../../project").AssignResourcesToProjectResponse>>;
        createProject: ({ name, description, purpose, environment, }: import("../../project").ICreateProjectApiRequest) => Promise<Readonly<import("../../project").CreateProjectResponse>>;
        deleteProject: ({ project_id, }: import("../../project").IDeleteProjectApiRequest) => Promise<Readonly<import("../../project").DeleteProjectResponse>>;
        getDefaultProject: () => Promise<Readonly<import("../../project").GetDefaultProjectResponse>>;
        getProject: ({ project_id, }: import("../../project").IGetProjectApiRequest) => Promise<Readonly<import("../../project").GetProjectResponse>>;
        listDefaultProjectResources: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../project").ListDefaultProjectResourcesResponse>>;
        listProjectResources: ({ page, per_page, project_id, }: import("../../project").IListProjectResourcesApiRequest) => Promise<Readonly<import("../../project").ListProjectResourcesResponse>>;
        listProjects: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../project").ListProjectsResponse>>;
        patchDefaultProject: ({ description, environment, is_default, name, purpose, }: import("../../project").IPatchDefaultProjectApiRequest) => Promise<Readonly<import("../../project").PatchDefaultProjectResponse>>;
        patchProject: ({ description, environment, is_default, name, project_id, purpose, }: import("../../project").IPatchProjectApiRequest) => Promise<Readonly<import("../../project").PatchProjectResponse>>;
        updateDefaultProject: ({ description, environment, is_default, name, purpose, }: import("../../project").IUpdateDefaultProjectApiRequest) => Promise<Readonly<import("../../project").UpdateDefaultProjectResponse>>;
        updateProject: ({ description, environment, is_default, name, project_id, purpose, }: import("../../project").IUpdateProjectApiRequest) => Promise<Readonly<import("../../project").UpdateProjectResponse>>;
    }>;
    region: Readonly<{
        listRegions: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../region").ListRegionsResponse>>;
    }>;
    size: Readonly<{
        listSizes: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../size").ListSizesResponse>>;
    }>;
    snapshot: Readonly<{
        deleteSnapshot: ({ snapshot_id, }: import("../../snapshot").IDeleteSnapshotApiRequest) => Promise<Readonly<import("../../snapshot").DeleteSnapshotRes>>;
        getSnapshot: ({ snapshot_id, }: import("../../snapshot").IGetSnapshotApiRequest) => Promise<Readonly<import("../../snapshot").GetSnapshotResponse>>;
        listSnapshots: ({ page, per_page, resource_type, }: import("../../snapshot").IListSnapshotApiRequest) => Promise<Readonly<import("../../snapshot").ListSnapshotsResponse>>;
    }>;
    sshKey: Readonly<{
        createSshKey: ({ name, public_key, }: import("../../ssh-key").ICreateSshKeyApiRequest) => Promise<Readonly<import("../../ssh-key").CreateSshKeyResponse>>;
        destroySshKey: ({ ssh_key_id, }: import("../../ssh-key").IDestroySshKeyApiRequest) => Promise<Readonly<import("../../ssh-key").DestroySshKeyResponse>>;
        getSshKey: ({ ssh_key_id, }: import("../../ssh-key").IGetSshKeyApiRequest) => Promise<Readonly<import("../../ssh-key").GetSshKeyResponse>>;
        listSshKeys: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../ssh-key").ListSshKeysResponse>>;
        updateSshKey: ({ name, ssh_key_id, }: import("../../ssh-key").IUpdateSshKeyApiRequest) => Promise<Readonly<import("../../ssh-key").UpdateSshKeyResponse>>;
    }>;
    tag: Readonly<{
        createTag: ({ name, }: import("../../tag").ICreateTagApiRequest) => Promise<Readonly<import("../../tag").CreateTagResponse>>;
        deleteTag: ({ tag_name, }: import("../../tag").IDeleteTagApiRequest) => Promise<Readonly<import("../../tag").DeleteTagResponse>>;
        getTag: ({ tag_name, }: import("../../tag").IGetTagApiRequest) => Promise<Readonly<import("../../tag").GetTagResponse>>;
        listTags: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../tag").ListTagsResponse>>;
        tagResources: ({ tag_name, resources, }: import("../../tag").ITagResourcesApiRequest) => Promise<Readonly<import("../../tag").TagResourcesResponse>>;
        untagResources: ({ tag_name, resources, }: import("../../tag").IUntagResourcesApiRequest) => Promise<Readonly<import("../../tag").UntagResourcesResponse>>;
    }>;
    volume: Readonly<{
        attachVolumeToDroplet: ({ droplet_id, region, volume_id, }: import("../../volume").IAttachVolumeToDropletApiRequest) => Promise<Readonly<import("../../volume").AttachVolumeToDropletResponse>>;
        createVolume: ({ description, filesystem_label, filesystem_type, name, region, size_gigabytes, snapshot_id, tags, }: import("../../volume").ICreateVolumeApiRequest) => Promise<Readonly<import("../../volume").CreateVolumeResponse>>;
        createVolumeSnapshot: ({ name, tags, volume_id, }: import("../../volume").ICreateVolumeSnapshotApiRequest) => Promise<Readonly<import("../../volume").CreateVolumeSnapshotRes>>;
        deleteVolume: ({ volume_id, }: import("../../volume").IDeleteVolumeApiRequest) => Promise<Readonly<import("../../volume").DeleteVolumeResponse>>;
        deleteVolumeByName: ({ region, volume_name, }: import("../../volume").IDeleteVolumeByNameApiRequest) => Promise<Readonly<import("../../volume").DeleteVolumeByNameResponse>>;
        detachVolumeFromDroplet: ({ droplet_id, region, volume_id, }: import("../../volume").IDetachVolumeToDropletApiRequest) => Promise<Readonly<import("../../volume").DetachVolumeToDropletResponse>>;
        getVolume: ({ volume_id, }: import("../../volume").IGetVolumeApiRequest) => Promise<Readonly<import("../../volume").GetVolumeResponse>>;
        getVolumeAction: ({ action_id, volume_id, }: import("../../volume").IGetVolumeActionApiRequest) => Promise<Readonly<import("../../volume").GetVolumeActionResponse>>;
        listVolumeActions: ({ page, per_page, volume_id, }: import("../../volume").IListVolumeActionsApiRequest) => Promise<Readonly<import("../../volume").ListVolumeActionssResponse>>;
        listVolumes: ({ name, page, per_page, }: import("../../volume").IListVolumesApiRequest) => Promise<Readonly<import("../../volume").ListVolumesResponse>>;
        listVolumeSnapshots: ({ page, per_page, volume_id, }: import("../../volume").IListVolumeSnapshotsApiRequest) => Promise<Readonly<import("../../volume").ListVolumeSnapshotsRes>>;
        resizeVolume: ({ region, size_gigabytes, volume_id, }: import("../../volume").IResizeVolumeToDropletApiRequest) => Promise<Readonly<import("../../volume").ResizeVolumeToDropletResponse>>;
    }>;
    vpc: Readonly<{
        createVpc: ({ description, ip_range, is_default, name, region, }: import("../../vpc").ICreateVpcApiRequest) => Promise<Readonly<import("../../vpc").CreateVpcResponse>>;
        deleteVpc: ({ vpc_id, }: import("../../vpc").IDeleteVpcApiRequest) => Promise<Readonly<import("../../vpc").DeleteVpcResponse>>;
        getVpc: ({ vpc_id, }: import("../../vpc").IGetVpcApiRequest) => Promise<Readonly<import("../../vpc").GetVpcResponse>>;
        listVpcResources: ({ page, per_page, resource_type, vpc_id, }: import("../../vpc").IListVpcResourcesApiRequest) => Promise<Readonly<import("../../vpc").ListVpcResourcesResponse>>;
        listVpcs: ({ page, per_page, }: import("../../types").IListRequest) => Promise<Readonly<import("../../vpc").ListVpcsResponse>>;
        updateVpc: ({ description, is_default, name, vpc_id, }: import("../../vpc").IUpdateVpcApiRequest) => Promise<Readonly<import("../../vpc").UpdateVpcResponse>>;
    }>;
}>;
