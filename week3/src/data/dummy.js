export const links = [
  {
    name: 'dashboard',
    icon: 'dashboard-icon',
  },
  {
    name: 'orders',
    icon: 'orders-icon',
  },
  {
    name: 'employees',
    icon: 'employees-icon',
  },
  {
    name: 'customers',
    icon: 'customers-icon',
  },
  {
    name: 'kanban',
    icon: 'kanban-icon',
  },
  {
    name: 'editor',
    icon: 'editor-icon',
  },
  {
    name: 'calendar',
    icon: 'calendar-icon',
  },
  {
    name: 'color-picker',
    icon: 'color-picker-icon',
  },
  {
    name: 'line',
    icon: 'line-icon',
  },
  {
    name: 'area',
    icon: 'area-icon',
  },
  {
    name: 'bar',
    icon: 'bar-icon',
  },
  {
    name: 'pie',
    icon: 'pie-icon',
  },
  {
    name: 'financial',
    icon: 'financial-icon',
  },
  {
    name: 'color-mapping',
    icon: 'color-mapping-icon',
  },
  {
    name: 'pyramid',
    icon: 'pyramid-icon',
  },
  {
    name: 'stacked',
    icon: 'stacked-icon',
  },
];

export const earningData = [
  {
    icon: 'earning-icon-1',
    amount: '$34,245',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: 'earning-icon-2',
    amount: '$1,245',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 0)',
    pcColor: 'green-600',
  },
  {
    icon: 'earning-icon-3',
    amount: '$56,245',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: 'earning-icon-4',
    amount: '$90,245',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const sparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '30%' },
  { x: '2019', y: 18, text: '30%' },
  { x: '2020', y: 18, text: '30%' },
  { x: '2021', y: 18, text: '30%' },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalAmount: 32.38,
    OrderItems: 'Fresh produce',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage: 'product-image-1.jpg',
  },
  {
    OrderID: 10249,
    CustomerName: 'Tom',
    TotalAmount: 11.38,
    OrderItems: 'Dairy products',
    Location: 'UK',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage: 'product-image-2.jpg',
  },
];

export const contextMenuItems = [
  { text: 'Cut', icon: 'cut-icon' },
  { text: 'Copy', icon: 'copy-icon' },
  { text: 'Paste', icon: 'paste-icon' },
];

export const ordersGrid = [
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Right',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    width: '120',
    format: 'C2',
    textAlign: 'Right',
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '120',
    textAlign: 'Center',
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Andrew Fuller',
    EmployeeImage: 'employee-image-1.jpg',
  },
  {
    EmployeeID: 2,
    Name: 'Margaret Peacock',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Andrew Fuller',
    EmployeeImage: 'employee-image-2.jpg',
  },
];

export const employeesGrid = [
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '120',
    textAlign: 'Right',
  },
  {
    field: 'Name',
    headerText: 'Name',
    width: '150',
  },
  {
    field: 'Title',
    headerText: 'Title',
    width: '150',
  },
  {
    field: 'HireDate',
    headerText: 'Hire Date',
    width: '120',
    format: 'yMd',
    textAlign: 'Right',
  },
];

export const customersData = [
  {
    CustomerID: 1,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
    CustomerImage: 'customer-image-1.jpg',
  },
  {
    CustomerID: 2,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
    CustomerImage: 'customer-image-2.jpg',
  },
];

export const customersGrid = [
  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Right',
  },
  {
    field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
  },
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '120',
    textAlign: 'Center',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Meeting with CEO',
    Location: 'Office',
    StartTime: '2025-06-22T09:00:00.000Z',
    EndTime: '2025-06-22T10:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Project Discussion',
    Location: 'Conference Room',
    StartTime: '2025-06-22T11:00:00.000Z',
    EndTime: '2025-06-22T12:00:00.000Z',
    CategoryColor: '#3366CC',
  },
];

export const kanbanData = [
  {
    Id: '1',
    Status: 'Open',
    Summary: 'Analyze the new requirements',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze, Requirements',
    Estimate: '3',
    Assignee: 'Nancy Davolio',
    RankId: 1,
    Color: '#ea9a7a',
  },
  {
    Id: '2',
    Status: 'InProgress',
    Summary: 'Develop the new feature',
    Type: 'Feature',
    Priority: 'High',
    Tags: 'Development, Feature',
    Estimate: '5',
    Assignee: 'Margaret Peacock',
    RankId: 1,
    Color: '#67b7dc',
  },
];

export const kanbanGrid = [
  { headerText: 'To Do', keyField: 'Open', allowToggle: true },
  { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },
  { headerText: 'Testing', keyField: 'Testing', allowToggle: true },
  { headerText: 'Done', keyField: 'Close', allowToggle: true },
];

export const editorData = `
  <p><strong>The Rich Text Editor</strong> component is a feature-rich WYSIWYG HTML editor.</p>
  <p>It supports a variety of editing capabilities, including:</p>
  <ul>
    <li>Text formatting</li>
    <li>Image insertion</li>
    <li>Table creation</li>
    <li>Hyperlink management</li>
  </ul>
`;

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4B8F',
  },
  {
    name: 'orange-theme',
    color: '#FB9678',
  },
];

export const stackedCustomSeries = [
  {
    dataSource: [
      { x: 'Jan', y: 120 },
      { x: 'Feb', y: 180 },
      { x: 'Mar', y: 80 },
      { x: 'Apr', y: 150 },
      { x: 'May', y: 200 },
      { x: 'Jun', y: 100 },
      { x: 'Jul', y: 160 },
      { x: 'Aug', y: 190 },
      { x: 'Sep', y: 130 },
      { x: 'Oct', y: 170 },
      { x: 'Nov', y: 110 },
      { x: 'Dec', y: 140 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Product A',
    type: 'StackingColumn',
    background: 'blue',
  },
  {
    dataSource: [
      { x: 'Jan', y: 80 },
      { x: 'Feb', y: 120 },
      { x: 'Mar', y: 150 },
      { x: 'Apr', y: 100 },
      { x: 'May', y: 130 },
      { x: 'Jun', y: 180 },
      { x: 'Jul', y: 90 },
      { x: 'Aug', y: 110 },
      { x: 'Sep', y: 160 },
      { x: 'Oct', y: 140 },
      { x: 'Nov', y: 190 },
      { x: 'Dec', y: 70 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Product B',
    type: 'StackingColumn',
    background: 'red',
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const lineCustomSeries = [
  {
    dataSource: [
      { x: new Date(2005, 0, 1), y: 21 },
      { x: new Date(2006, 0, 1), y: 24 },
      { x: new Date(2007, 0, 1), y: 36 },
      { x: new Date(2008, 0, 1), y: 38 },
      { x: new Date(2009, 0, 1), y: 54 },
      { x: new Date(2010, 0, 1), y: 57 },
      { x: new Date(2011, 0, 1), y: 70 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
  {
    dataSource: [
      { x: new Date(2005, 0, 1), y: 28 },
      { x: new Date(2006, 0, 1), y: 44 },
      { x: new Date(2007, 0, 1), y: 48 },
      { x: new Date(2008, 0, 1), y: 50 },
      { x: new Date(2009, 0, 1), y: 66 },
      { x: new Date(2010, 0, 1), y: 78 },
      { x: new Date(2011, 0, 1), y: 84 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
  },
];

export const linePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
};

export const linePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const areaCustomSeries = [
  {
    dataSource: [
      { x: new Date(2002, 0, 1), y: 2.2 },
      { x: new Date(2003, 0, 1), y: 3.4 },
      { x: new Date(2004, 0, 1), y: 2.8 },
      { x: new Date(2005, 0, 1), y: 1.6 },
      { x: new Date(2006, 0, 1), y: 2.3 },
      { x: new Date(2007, 0, 1), y: 2.5 },
      { x: new Date(2008, 0, 1), y: 2.9 },
      { x: new Date(2009, 0, 1), y: 3.8 },
      { x: new Date(2010, 0, 1), y: 1.4 },
      { x: new Date(2011, 0, 1), y: 3.1 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    width: '2',
    fill: '#03C9D7',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Area',
  },
  {
    dataSource: [
      { x: new Date(2002, 0, 1), y: 2 },
      { x: new Date(2003, 0, 1), y: 1.7 },
      { x: new Date(2004, 0, 1), y: 1.8 },
      { x: new Date(2005, 0, 1), y: 2.1 },
      { x: new Date(2006, 0, 1), y: 2.3 },
      { x: new Date(2007, 0, 1), y: 2.0 },
      { x: new Date(2008, 0, 1), y: 2.5 },
      { x: new Date(2009, 0, 1), y: 2.7 },
      { x: new Date(2010, 0, 1), y: 2.0 },
      { x: new Date(2011, 0, 1), y: 2.2 },
    ],
    xName: 'x',
    yName: 'y',
    name: 'France',
    width: '2',
    fill: '#FB9678',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Area',
  },
];

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 5,
  interval: 1,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
};

export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};