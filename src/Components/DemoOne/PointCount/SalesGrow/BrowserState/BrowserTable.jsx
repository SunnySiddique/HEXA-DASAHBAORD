import { Avatar, Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Google Chrome",
    price: (
      <div className="price-title">
        <p>92,345</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>5.5% </p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>12025</p>
      </div>
    ),
    goal: (
      <div className="revenue-title">
        <p>90%</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "2",
    name: "Google Chrome",
    price: (
      <div className="price-title">
        <p>92,345</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>5.5% </p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>12025</p>
      </div>
    ),
    goal: (
      <div className="revenue-title">
        <p>90%</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "3",
    name: "Google Chrome",
    price: (
      <div className="price-title">
        <p>92,345</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>5.5% </p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>12025</p>
      </div>
    ),
    goal: (
      <div className="revenue-title">
        <p>90%</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "1",
    name: "Google Chrome",
    price: (
      <div className="price-title">
        <p>92,345</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>5.5% </p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>12025</p>
      </div>
    ),
    goal: (
      <div className="revenue-title">
        <p>90%</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA+CAYAAAB+39gDAAAABHNCSVQICAgIfAhkiAAABW1JREFUaEPlW11uGkkQrh5MpMigdU6w+ASLpcBrxrDvsU+wzgmWnMD4BLFPkOwJwr4vePwKkZY9gb0nWK/AihTCVKp7NDDA/FT1DAp2+sWy6K6ur7v+uqpGwRbGZ7dem5fKrwGhBgrqtMUBgNJ/IwPH9M89zRmDUuPS/MvNc298VzQ7qiiCBpRT/p2AnBComhVdBAKIvZI/uyoKbG6Ak19fugrVOQFzrUAlLkIPFV5U//rk5aFrDXB7wNbhoAdzeFvxRlqkxUMMEN36wYNTPie96Yh3y7FAIXT3B8MLKQkRwKnbqEMJ3m8ajJRtEf5BgB44vlf5+tXcwnRvrw6+49LmWl9/4TONZIxmpxL9ZAN8aDdPfMT3SimyiNkDEW/AwW6WDhlR951LLlCie090T7PohhyyAE5bjTMSSbo53kCEi+pg2OXNDmbRHgRSkRVmDsQ3lcHoQ9bsTIBScID+28rg02XWxnG/T1rNrlJAFpk5GCBTAQaW0rlmbkc+G/6s9ocn3PmxINvNHjH1mk1jjkdpFjYRoDYo6MA1W+cA/6/MZzXlje/ZzMVM1FZ6WirfKVA/cehondzzZ0dJhicWoHEFpTLd3Hp4lbyljd4lURPrI+C40h8dxdGLBSjfAIBiyUOJ+U67ncAdqb85NxjOSTrgDYBSvTMbIPxbGQxrEoay5k7ajXuumC5oxejjBsBpu6FF081iYPV3/INE5Ey2Jn32RGpsgpP2iI/jKOUVgGKXsJQPlk+SHMC09bIDynknWWMgKv84GgSsAWze2jx1itS/EJCNHgZrVw3OAqAOxciPfZSe2Db0L+TBSg/XbnEB0E73tH3J79yTDnXSanjkh19JDz3KkwEYpBie3UoJGYGwiDu5+4hDtwjh/fmXFzroMABtFTpOqbnMc+ZZq01w8sbwGYC2oqDXbsPA5Dc0S9UJbrDdJLG1G5X+MPNFYkc5WGXLm45Rq4PRC2UVuYQc02udIpi1dGAeOJtrp63mHbmun62oUmSjcukfvdrplFyrzZmL8qiPfpsSQOFLOsoY4hUp8laTT3YhW8CktvAqzwlt00WE55jHVei8kCIHT88S/rtv9QLluRemZC6mFQDQ3oKGvkbKtGR+HoA6LqUbtAe4HrlLGOfOzeXsaZOdB5jLjT0GgN/1BndeBykQIT/YpAKkpD6w1J5H4Saevh/c8UiG/PQHsoW/ca3uup+mSEZYD4hQ0JHCzsei+cxwckbZ5sTj1pCNsEqEGVr6NaH/5nH2O/sepFpJtT86+EFe9JZJVvMkWUu0FiWamk4uJx/NyTz5rJo+LVt/+CjyornEgbqTKC9zWKRoLh+7jf+4BdgV/xdRm/XahFWCZxupQ+vaxFop78lVlwjQ6X5/2AtvdLM+aBV870Z9MC6yKqrCW7gektET61+cy/rxavTGeZuGu2f6ncjOKBf5NhTnalMy7Ol9MiXwuI0AuhZQ8WeHhfTJOOVbrntAijnVHNykZqDUwok4VCog002Z7I+mC5E5skLFzMqQuDGB0T+WxLu4TsLYKxOgeU4Juw1JizvUznHFvAQz7aHVPEcFXfYaBjhNiwUwBEkMXHJ1UvesUPPqm6zuJ2lrtNY5B9RZ1JmnHQoboAGpW6wc1ZNYVw2UllInPYyfX49uNJ3Px41Xc8d8bkC6Jmg6ImsJPp5J+rdFAJcupNwVNa+y5S5lIhmwfX/WlVppMcBFpE+9pOAramCVt3lI8HJbo5NoWgMMCRoDBNSBb5k8TgSrm9kdv8Ptzd4awAXQoCO/QzkMV6ajEdboqQPKfCdxKdGzwowMV7QCY4QEVNUphKslibGpwCr6nAfpOyZfeUWBivKZW0S5oL/XvG8tCDqLZ6ZdVQAAAABJRU5ErkJggg==",
  },
  {
    key: "1",
    name: "Google Chrome",
    price: (
      <div className="price-title">
        <p>92,345</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>5.5% </p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>12025</p>
      </div>
    ),
    goal: (
      <div className="revenue-title">
        <p>90%</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,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",
  },
];

const columns = [
  {
    title: "PRODUCT NAME",
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
    title: "PRICE	",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "SOLD",
    dataIndex: "sold",
    key: "sold",
  },
  {
    title: "REVENUE",
    dataIndex: "revenue",
    key: "revenue",
  },
  {
    title: "GOAL CONV. RATE",
    dataIndex: "goal",
    key: "goal",
  },
];

const BrowserTable = () => {
  return (
    <div>
      <Table style={{maxWidth: "100%"}} scroll={{x: true}} dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default BrowserTable;
