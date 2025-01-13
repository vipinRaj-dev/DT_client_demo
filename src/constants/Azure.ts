let services = [
  {
    DisplayName: "App 10",
    AppID: "autosvcacc_h15AmKMS01KYWeXeieXbenrNW30/6IFF5G4jI5K+gxs=",
    CreatedDateAndTime: "2020-02-05T06:44:42Z",
  },
  {
    DisplayName: "ustimssrvusr_IpABId12F7ML+CT1VbA4xE/9a/0CIV3hbOjJLEVag0U=",
    AppID: "19027551-d67f-4c82-8473-ec58063f1bb6",
    CreatedDateAndTime: "2018-08-06T01:15:57Z",
  },
  {
    DisplayName: "UST Mirat",
    AppID: "Ocaf8e1e-aa55-4dcd-a7b8-e2c100369500",
    CreatedDateAndTime: "2018-09-26T05:38:51Z",
  },
  {
    DisplayName: "citrix-xd-bce1b30c-5b9e-431c-a52d-fa7927348a8b",
    AppID: "dbed6008-6161-4015-8b7a-83c20461a5e9",
    CreatedDateAndTime: "2020-01-28T12:59:42Z",
  },
  {
    DisplayName: "citrix-xd-9d2c3ff8-a5a7-4160-bc9e-1d8e8a38deb2",
    AppID: "6f7771ee-72a5-4c31-8efa-c54b08058192",
    CreatedDateAndTime: "2020-01-29T06:01:51Z",
  },
  {
    DisplayName: "test",
    AppID: "cd98d29b-7lab-4c25-97ad-990cfc60774d",
    CreatedDateAndTime: "2018-06-26T02:10:47Z",
  },
];

export interface ServicePrincipalType {
  name: string;
  createdDateAndTime: string;
  displayName: string;
  servicePrincipalNames: string[];
}

const servicePrincipalsData: ServicePrincipalType[] = [
  {
    name: "Microsoft Azure Policy Insights",
    createdDateAndTime: "2022-11-28T10:32:06Z",
    displayName: "omsagent-ustcisinfaks01",
    servicePrincipalNames: [
      "ba338985-772b-48fd-86f6-9e54bdc80546",
      "https://identity.azure.net/0fNyin67XLPesuFiFg+39nr2izSuV5i.JFhjP/DCEK2A-1",
    ],
  },
  {
    name: "Microsoft Azure Active Directory",
    createdDateAndTime: "2023-01-15T08:45:12Z",
    displayName: "aadagent-xyz123",
    servicePrincipalNames: [
      "c1234567-89ab-cdef-0123-456789abcdef",
      "https://identity.azure.net/abc123xyz",
    ],
  },
  {
    name: "Microsoft Azure Storage",
    createdDateAndTime: "2023-03-22T14:22:45Z",
    displayName: "storageagent-abc456",
    servicePrincipalNames: [
      "d2345678-90ab-cdef-1234-567890abcdef",
      "https://identity.azure.net/def456ghi",
    ],
  },
  {
    name: "Microsoft Azure Compute",
    createdDateAndTime: "2023-05-10T11:30:00Z",
    displayName: "computeagent-xyz789",
    servicePrincipalNames: [
      "e3456789-01ab-cdef-2345-678901abcdef",
      "https://identity.azure.net/ghi789jkl",
    ],
  },
  {
    name: "Microsoft Azure Networking",
    createdDateAndTime: "2023-06-18T09:15:30Z",
    displayName: "networkagent-abc123",
    servicePrincipalNames: [
      "f4567890-12ab-cdef-3456-789012abcdef",
      "https://identity.azure.net/jkl012mno",
    ],
  },
  {
    name: "Microsoft Azure Security",
    createdDateAndTime: "2023-07-25T14:45:20Z",
    displayName: "securityagent-xyz456",
    servicePrincipalNames: [
      "g5678901-23ab-cdef-4567-890123abcdef",
      "https://identity.azure.net/mno345pqr",
    ],
  },
  {
    name: "Microsoft Azure AI",
    createdDateAndTime: "2023-08-30T16:00:00Z",
    displayName: "aiagent-abc789",
    servicePrincipalNames: [
      "h6789012-34ab-cdef-5678-901234abcdef",
      "https://identity.azure.net/pqr678stu",
    ],
  },
  {
    name: "Microsoft Azure DevOps",
    createdDateAndTime: "2023-09-12T13:20:10Z",
    displayName: "devopsagent-xyz123",
    servicePrincipalNames: [
      "i7890123-45ab-cdef-6789-012345abcdef",
      "https://identity.azure.net/stu901vwx",
    ],
  },
  {
    name: "Microsoft Azure AI",
    createdDateAndTime: "2023-08-30T16:00:00Z",
    displayName: "aiagent-abc789",
    servicePrincipalNames: [
      "h6789012-34ab-cdef-5678-901234abcdef",
      "https://identity.azure.net/pqr678stu",
    ],
  },
  {
    name: "Microsoft Azure DevOps",
    createdDateAndTime: "2023-09-12T13:20:10Z",
    displayName: "devopsagent-xyz123",
    servicePrincipalNames: [
      "i7890123-45ab-cdef-6789-012345abcdef",
      "https://identity.azure.net/stu901vwx",
    ],
  },
  {
    name: "Microsoft Azure DevOps",
    createdDateAndTime: "2023-09-12T13:20:10Z",
    displayName: "devopsagent-xyz123",
    servicePrincipalNames: [
      "i7890123-45ab-cdef-6789-012345abcdef",
      "https://identity.azure.net/stu901vwx",
    ],
  },
  {
    name: "Microsoft Azure DevOps",
    createdDateAndTime: "2023-09-12T13:20:10Z",
    displayName: "devopsagent-xyz123",
    servicePrincipalNames: [
      "i7890123-45ab-cdef-6789-012345abcdef",
      "https://identity.azure.net/stu901vwx",
    ],
  },
  {
    name: "Microsoft Azure DevOps",
    createdDateAndTime: "2023-09-12T13:20:10Z",
    displayName: "devopsagent-xyz123",
    servicePrincipalNames: [
      "i7890123-45ab-cdef-6789-012345abcdef",
      "https://identity.azure.net/stu901vwx",
    ],
  },
  {
    name: "Microsoft Azure DevOps",
    createdDateAndTime: "2023-09-12T13:20:10Z",
    displayName: "devopsagent-xyz123",
    servicePrincipalNames: [
      "i7890123-45ab-cdef-6789-012345abcdef",
      "https://identity.azure.net/stu901vwx",
    ],
  },
];

export interface ResourceGroupType {
  name: string;
  DisplayName: string;
  GivenName: string;
  ID: string;
  Mail: string;
  JobTitle: string;
  UserPrincipalName: string;
}

const ResourceGrpData: ResourceGroupType[] = [
  {
    name: "Shani Basha",
    DisplayName: "Shani Basha",
    GivenName: "None",
    ID: "f6c05843-cd58-4628-b74e-8d5fe121f468",
    Mail: "None",
    JobTitle: "None",
    UserPrincipalName: "a-hashan@vatims.onmicrosoft.com",
  },
  {
    name: "John Doe",
    DisplayName: "John Doe",
    GivenName: "John",
    ID: "a1234567-b89c-123d-456e-789f01234567",
    Mail: "john.doe@example.com",
    JobTitle: "Software Engineer",
    UserPrincipalName: "john.doe@vatims.onmicrosoft.com",
  },
  {
    name: "Jane Smith",
    DisplayName: "Jane Smith",
    GivenName: "Jane",
    ID: "b2345678-c90d-234e-567f-890g12345678",
    Mail: "jane.smith@example.com",
    JobTitle: "Project Manager",
    UserPrincipalName: "jane.smith@vatims.onmicrosoft.com",
  },
  {
    name: "Alice Johnson",
    DisplayName: "Alice Johnson",
    GivenName: "Alice",
    ID: "c3456789-d01e-345f-678g-901h23456789",
    Mail: "alice.johnson@example.com",
    JobTitle: "Data Analyst",
    UserPrincipalName: "alice.johnson@vatims.onmicrosoft.com",
  },
  {
    name: "Bob Smith",
    DisplayName: "Bob Smith",
    GivenName: "Bob",
    ID: "a12b34c5-6d7e-8f90-1a2b-3c4d5e6f7890",
    Mail: "bob.smith@example.com",
    JobTitle: "Manager",
    UserPrincipalName: "bob.smith@vatims.onmicrosoft.com"
  },
  {
    name: "Charlie Brown",
    DisplayName: "Charlie Brown",
    GivenName: "Charlie",
    ID: "567890ab-cdef-0123-4567-890abcdef",
    Mail: "charlie.brown@example.com",
    JobTitle: "Software Engineer",
    UserPrincipalName: "charlie.brown@vatims.onmicrosoft.com"
  },
  {
    name: "Charlie Brown",
    DisplayName: "Charlie Brown",
    GivenName: "Charlie",
    ID: "567890ab-cdef-0123-4567-890abcdef",
    Mail: "charlie.brown@example.com",
    JobTitle: "Software Engineer",
    UserPrincipalName: "charlie.brown@vatims.onmicrosoft.com"
  },
];

export interface AccountsType {
  [key: string]: string | undefined;
};

let ActiveDirectory : AccountsType[] = [
  {
    "Display Name": "Shani Basha",
    "Given Name": "None",
    "ID": "f6c05843-cd58-4628-b74e-8d5fe121f468",
    "Mail": "None",
    "Job Title": "None",
    "User Principal Name": "a-bashas@ustims.onmicrosoft.com"
  },
  {
    "Display Name": "Jiju Mohanan",
    "Given Name": "None",
    "ID": "2fe4ee4e-d4e0-4d68-8b1a-c031d8434e36",
    "Mail": "None",
    "Job Title": "None",
    "User Principal Name": "a-jiju@ustims.onmicrosoft.com"
  }
]

let accounts : AccountsType[] = [
  {
    "Cloud Name": "AzureCloud",
    "Tenant ID": "392468e2-9b4c-416a-b7d2-e2ca539ab6fb",
    "Username": "a-vidyanand@ustims.onmicrosoft.com"
  },
  {
    "Cloud Name": "AzureCloud",
    "Tenant ID": "392468e2-9b4c-416a-b7d2-e2ca539ab6fb",
    "Username": "a-vidyanand@ustims.onmicrosoft.com"
  }
]

export interface Content {
  [key: string]: any;
};

export interface ContentProps {
  accountEntries: Content[];
  imgSrc? : string;
};

let Servers = [
  {
    "Administrator Login": "Azureuser",
    "Fully Qualified Domain Name": "cis-solarwinds-sql-demo.database.windows.net",
    "Public Network Access": "Enabled",
    "Location": "",
    "ID": ["ba338985-772b-48fd-86f6-9e54bdc80546", "https://identity.azure.net/0fNyjn67XLPesuFiFg+39nr2izSuV5iJFhjP/DCEK2A=%27]"],
    "Administrator" : "None",
    "Name": "cis-solarwinds-sql-demo",
    "Resource Group": "UDTIMSADAWSW01"
  },
  {
    "Administrator Login": "Azureuser",
    "Fully Qualified Domain Name": "cis-solarwinds-sql-demo.database.windows.net",
    "Public Network Access": "Enabled",
    "Location": "",
    "ID": ["ba338985-772b-48fd-86f6-9e54bdc80546", "https://identity.azure.net/0fNyjn67XLPesuFiFg+39nr2izSuV5iJFhjP/DCEK2A=%27]"],
    "Administrator" : "None",
    "Name": "cis-solarwinds-sql-demo",
    "Resource Group": "UDTIMSADAWSW01"
  },
  {
    "Administrator Login": "Azureuser",
    "Fully Qualified Domain Name": "cis-solarwinds-sql-demo.database.windows.net",
    "Public Network Access": "Enabled",
    "Location": "",
    "ID": ["ba338985-772b-48fd-86f6-9e54bdc80546", "https://identity.azure.net/0fNyjn67XLPesuFiFg+39nr2izSuV5iJFhjP/DCEK2A=%27]"],
    "Administrator" : "None",
    "Name": "cis-solarwinds-sql-demo",
    "Resource Group": "UDTIMSADAWSW01"
  },
  {
    "Administrator Login": "Azureuser",
    "Fully Qualified Domain Name": "cis-solarwinds-sql-demo.database.windows.net",
    "Public Network Access": "Enabled",
    "Location": "",
    "ID": ["ba338985-772b-48fd-86f6-9e54bdc80546", "https://identity.azure.net/0fNyjn67XLPesuFiFg+39nr2izSuV5iJFhjP/DCEK2A=%27]"],
    "Administrator" : "None",
    "Name": "cis-solarwinds-sql-demo",
    "Resource Group": "UDTIMSADAWSW01"
  }
]

let Machines = [
  {
    "Name": "CIS-demo-VM1",
    "Admin Username": "Azureuser",
    "Resource Group": "UDTIMSADAWSW01",
    "License Type": "None",
    "Location": "eastus",
    "Computer Name": "CIS-demo-VM1",
    "VM ID": "ba338985-772b-48fd-86f6-9e54bdc80546",
    "Data Disk Size in GB": ""
  },
  {
    "Name": "CIS-demo-VM1",
    "Admin Username": "Azureuser",
    "Resource Group": "UDTIMSADAWSW01",
    "License Type": "None",
    "Location": "eastus",
    "Computer Name": "CIS-demo-VM1",
    "VM ID": "ba338985-772b-48fd-86f6-9e54bdc80546",
    "Data Disk Size in GB": ""
  },
  {
    "Name": "CIS-demo-VM1",
    "Admin Username": "Azureuser",
    "Resource Group": "UDTIMSADAWSW01",
    "License Type": "None",
    "Location": "eastus",
    "Computer Name": "CIS-demo-VM1",
    "VM ID": "ba338985-772b-48fd-86f6-9e54bdc80546",
    "Data Disk Size in GB": ""
  },
  {
    "Name": "CIS-demo-VM1",
    "Admin Username": "Azureuser",
    "Resource Group": "UDTIMSADAWSW01",
    "License Type": "None",
    "Location": "eastus",
    "Computer Name": "CIS-demo-VM1",
    "VM ID": "ba338985-772b-48fd-86f6-9e54bdc80546",
    "Data Disk Size in GB": ""
  }
]

export interface containersType {
  name: string;
  server: string;
  userName: string;
  OSType: string;
  port: string;
  protocol: string;
  cpu: string;
  gpu: string;
  memory: string;
  IPAddress: string;
  type: string;
  location: string;
  resourceGroup: string;
}

const Containers: containersType[] = [
  {
    name: "cp-demo-container1",
    server: "demoregistry2022.azurecr.io",
    userName: "demoregistry2022",
    OSType: "Linux",
    port: "80",
    protocol: "TCP",
    cpu: "1.0",
    gpu: "None",
    memory: "string",
    IPAddress: "20.85.155.115",
    type: "Public",
    location: "eastus",
    resourceGroup: "USTCISASLRG01"
  },
  {
    name: "cp-demo-container2",
    server: "demoregistry2022.azurecr.io",
    userName: "demoregistry2022",
    OSType: "Linux",
    port: "80",
    protocol: "TCP",
    cpu: "1.0",
    gpu: "None",
    memory: "string",
    IPAddress: "20.85.155.115",
    type: "Public",
    location: "eastus",
    resourceGroup: "USTCISASLRG01"
  },
  {
    name: "cp-demo-container3",
    server: "demoregistry2022.azurecr.io",
    userName: "demoregistry2022",
    OSType: "Linux",
    port: "80",
    protocol: "TCP",
    cpu: "1.0",
    gpu: "None",
    memory: "string",
    IPAddress: "20.85.155.115",
    type: "Public",
    location: "eastus",
    resourceGroup: "USTCISASLRG01"
  },
  {
    name: "cp-demo-container4",
    server: "demoregistry2022.azurecr.io",
    userName: "demoregistry2022",
    OSType: "Linux",
    port: "80",
    protocol: "TCP",
    cpu: "1.0",
    gpu: "None",
    memory: "string",
    IPAddress: "20.85.155.115",
    type: "Public",
    location: "eastus",
    resourceGroup: "USTCISASLRG01"
  },
  {
    name: "cp-demo-container5",
    server: "demoregistry2022.azurecr.io",
    userName: "demoregistry2022",
    OSType: "Linux",
    port: "80",
    protocol: "TCP",
    cpu: "1.0",
    gpu: "None",
    memory: "string",
    IPAddress: "20.85.155.115",
    type: "Public",
    location: "eastus",
    resourceGroup: "USTCISASLRG01"
  },
  {
    name: "cp-demo-container6",
    server: "demoregistry2022.azurecr.io",
    userName: "demoregistry2022",
    OSType: "Linux",
    port: "80",
    protocol: "TCP",
    cpu: "1.0",
    gpu: "None",
    memory: "string",
    IPAddress: "20.85.155.115",
    type: "Public",
    location: "eastus",
    resourceGroup: "USTCISASLRG01"
  },
  {
    name: "cp-demo-container7",
    server: "demoregistry2022.azurecr.io",
    userName: "demoregistry2022",
    OSType: "Linux",
    port: "80",
    protocol: "TCP",
    cpu: "1.0",
    gpu: "None",
    memory: "string",
    IPAddress: "20.85.155.115",
    type: "Public",
    location: "eastus",
    resourceGroup: "USTCISASLRG01"
  },
  {
    name: "cp-demo-container8",
    server: "demoregistry2022.azurecr.io",
    userName: "demoregistry2022",
    OSType: "Linux",
    port: "80",
    protocol: "TCP",
    cpu: "1.0",
    gpu: "None",
    memory: "string",
    IPAddress: "20.85.155.115",
    type: "Public",
    location: "eastus",
    resourceGroup: "USTCISASLRG01"
  },
]

export interface storageAccountEntriesType {
  name: string;
  creationTime: string;
  id: string;
  location: string;
  resourceGroup: string;
  type: string;  
}

let storageAccountEntries: storageAccountEntriesType[] = [
  {
    name: "cisdemo1",
    creationTime: "2022-03-19T17:58:41",
    id: "ba338985-772b-48fd-86f6-9e54bdc805",
    location: "Eastus",
    resourceGroup: "UDTIMSADAWSW01",
    type: "Microsoft.Storage"
  },
  {
    name: "cisdemo1",
    creationTime: "2022-03-19T17:58:41",
    id: "ba338985-772b-48fd-86f6-9e54bdc805",
    location: "Eastus",
    resourceGroup: "UDTIMSADAWSW01",
    type: "Microsoft.Storage"
  },
  {
    name: "cisdemo1",
    creationTime: "2022-03-19T17:58:41",
    id: "ba338985-772b-48fd-86f6-9e54bdc805",
    location: "Eastus",
    resourceGroup: "UDTIMSADAWSW01",
    type: "Microsoft.Storage"
  },
  {
    name: "cisdemo1",
    creationTime: "2022-03-19T17:58:41",
    id: "ba338985-772b-48fd-86f6-9e54bdc805",
    location: "Eastus",
    resourceGroup: "UDTIMSADAWSW01",
    type: "Microsoft.Storage"
  },
  {
    name: "cisdemo1",
    creationTime: "2022-03-19T17:58:41",
    id: "ba338985-772b-48fd-86f6-9e54bdc805",
    location: "Eastus",
    resourceGroup: "UDTIMSADAWSW01",
    type: "Microsoft.Storage"
  },
  {
    name: "cisdemo1",
    creationTime: "2022-03-19T17:58:41",
    id: "ba338985-772b-48fd-86f6-9e54bdc805",
    location: "Eastus",
    resourceGroup: "UDTIMSADAWSW01",
    type: "Microsoft.Storage"
  },
  {
    name: "cisdemo1",
    creationTime: "2022-03-19T17:58:41",
    id: "ba338985-772b-48fd-86f6-9e54bdc805",
    location: "Eastus",
    resourceGroup: "UDTIMSADAWSW01",
    type: "Microsoft.Storage"
  },
]

export { accounts, ActiveDirectory, services, servicePrincipalsData, ResourceGrpData, Servers, Machines, Containers, storageAccountEntries  };
