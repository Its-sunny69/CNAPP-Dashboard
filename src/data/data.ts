export const userDashboardData = {
  categories: [
    {
      id: "cspm",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          description: "Connected vs Not Connected accounts",
        },
        {
          id: "cloud-risk",
          name: "Cloud Account Risk Assessment",
          description: "Failed, Warning, Not available, Passed counts",
        },
      ],
    },
    {
      id: "cwpp",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "namespace-alerts",
          name: "Top 5 Namespace Specific Alerts",
          description: "No Graph data available",
        },
        {
          id: "workload-alerts",
          name: "Workload Alerts",
          description: "No Graph data available",
        },
      ],
    },
    {
      id: "registry",
      name: "Registry Scan",
      widgets: [
        {
          id: "image-risk",
          name: "Image Risk Assessment",
          description: "Critical, High, Medium, Low vulnerabilities",
        },
        {
          id: "image-security",
          name: "Image Security Issues",
          description: "Critical, High, Medium, Low security issues",
        },
      ],
    },
    {
      id: "ticket",
      name: "Ticket Category",
      widgets: [
        {
          id: "open-tickets",
          name: "Open Tickets",
          description: "List of currently open tickets",
        },
        {
          id: "resolved-tickets",
          name: "Resolved Tickets",
          description: "List of resolved tickets",
        },
      ],
    },
  ],
};
