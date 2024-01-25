import { Avatar, Progress, Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Robert Clinton",
    company: (
      <div className="price-title">
        <p>90% </p>
      </div>
    ),
    product: (
      <>
        <Progress type="circle" percent={90} size={20} />
      </>
    ),
    ImageSrc:
      "https://demo.dashboardmarket.com/hexadash-react/static/media/microsoft.33d50132b6508c5d6dfe.svg",
  },
  {
    key: "2",
    name: "Michael Johnson",
    company: (
      <div className="price-title">
        <p>90%</p>
      </div>
    ),
    product: (
      <>
        <Progress type="circle" percent={50} size={20} />
      </>
    ),
    ImageSrc:
      "https://demo.dashboardmarket.com/hexadash-react/static/media/adidas.7663ba7bc95df9005145.svg",
  },
  {
    key: "3",
    name: "Daniel White",
    company: (
      <div className="price-title">
        <p>90%</p>
      </div>
    ),
    product: (
      <>
        <Progress type="circle" percent={50} size={20} />
      </>
    ),
    ImageSrc:
      "https://demo.dashboardmarket.com/hexadash-react/static/media/Slack.2ad3910aa64e0351ec6d.svg",
  },
  {
    key: "4",
    name: "Michael Johnson",
    company: (
      <div className="price-title">
        <p>90%</p>
      </div>
    ),
    product: (
      <>
        <Progress type="circle" percent={50} size={20} />
      </>
    ),
    ImageSrc:
      "https://demo.dashboardmarket.com/hexadash-react/static/media/wordpress.d7ad36a520a236e3b830.svg",
  },
];

const columns = [
  {
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <span>
        <Avatar shape="square" src={record.ImageSrc}></Avatar>
        <span className="table-text" style={{ marginLeft: "8px" }}>
          {text}
        </span>
      </span>
    ),
  },
  {
    dataIndex: "company",
    key: "company",
  },
  {
    dataIndex: "product",
    key: "product",
  },
];

const Tables = () => {
  return (
    <div>
      <Table
        scroll={{ x: true }}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default Tables;
