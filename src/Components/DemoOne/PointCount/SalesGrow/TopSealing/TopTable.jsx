import { Avatar, Table } from "antd";
import './TopSaling.css';

const dataSource = [
  {
    key: "1",
    name: "Samsung Galaxy S8 256GB",
    price: (
      <div className="price-title">
        <p>$280</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>126</p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>$38,536</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "2",
    name: "Half Sleeve Shirt",
    price: (
      <div className="price-title">
        <p>$39</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>180</p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>$20,573</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "3",
    name: "Marco Shoes",
    price: (
      <div className="price-title">
        <p>$89</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>581</p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>$170,758</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABHNCSVQICAgIfAhkiAAABLxJREFUWEfNWE1PG1cUPW/8wYeDHfNh3GBiUkhpA9SpAi3dNKJZpauukJDKsq3UVmp/QvsLUrGp8gfYZgFVpBZcWDZKlE0KYtEI7ETFrok99tiesYGp7oNnPYaZ8dBIVUeyZL+5c+/xuefe+94wAKhWjU9NZn4LEzcVhV2mNaeLMeZ2+9w9RVHOrZmmyddM09yAj/3QFQhsMAIBZj4Q1m6BLgpCRiCCW1GRT7+PzTGtVt9gYLfJwGsgr3YUXNjKQOR1iqv4lE1WreknPJ1e7YK0u2/9x3ZMyGvkT1GUkiMQq/GFhHFq7JQO6x8nHbFa3Wgx4pbHiwDxAkCWArHC6nrDtObvVNE89kVT8W8qjgPRjaZ5fHxMpSRKqvVdOKX7Pp/PNgY5sYrSbo2L0qaUW9o0Gofm0dERKJhgQmaI1vP5HMLhCEKhkCNDXphzbQ2kEcGIk8KLxVcgsLHYYAuI18BeRc9KasWUnVq/kyPDMJDN7mFoKIFQ6JItK/JzmqbB7/ejs7PTs8ZZsVRuAeGikVq4nOt6vY7t7S1cv/4WIpFIS8gENJ/Po6+vjwen6/nzP9Hd3Y14/A3vQIgRuZkJIFZA9FvXdWQyu0gmr6Gjo4M/lsvlsLS0hIWFBYyPj6NUKmFnZwfjb48jNhDzJHBenQKIDMAODCme/n0ut8+DE+3VahXPnv2BlZUVjI6O8s/e3i4ymQxmZz/E4uIiwuHwmSp00tYZjVgByA+J0iMw5XKZVxlV0717P6JQKGBgYIAHVNUSfH4/dL2OiYkJfPH5l0gkEm1TdA6InXDttFMsFrG8vIzt7W2uEdINpY5SFuwIoGE0kP87h+npGSx+toiRkWuuzbEFxIkNuzQRG+l0GqurqwgEAjxVVFnUZwbjgwh1d6NYegVVVZHP5fHxnTv4+qtvEAwGHZlhalnjYnUDIt+rVCp49Oh3PH78BLVajT+XzWYRjUYxNTWJilbB4eEhisUDvHzxEoFgEPPz87j90Zx7Z/UKhPJPWlhb/xWbm5uIhE82crTebDYQuhTiunl1UEBdr4P2ccPDw7h79xPMzMy6ssGJICB2pSqzRF11a4uq4wEy2RcI+INIDCegqmXkczku3mAHMBjvgcJ8iA2MIpV6D6lUCv39MT6nrDqz5sgVCBlXKmU8fPgz0ul1NJtNXL2axFAigb3dXfy1v4+DQgGXoxFMTL6JsdF3cONGComhJNeL9XIdejIjdhWT/m0d9+//BF030NMTQm9vBGpJg6ZV0d/fh8mpd/H+zAcYGxtDNNp7Rgdizgg2PAFxKlvqlGtrv+Dp0ycwGgbi8Sh8SheuXBnGrVvTSCZHeOXIk5u0IvyJ4AKMdYvQ6up2jFjzKQYfpYYcUxnSRziVQZCtAMK3gNL8cuyqZFPRameGnjx3nIreySGBkMe+AOLkR2yoOFitWnfcBlwUSNs+LhnI+uGA/ysgbucaXt7Wc43cP9oxYj0o2dkLm/8dEOt2lPTx2oy004Q1qN2e+LWAeEmf3VlJAJdTegpEPXMI9xLAqSE56cPpZCBP9JNDuOW1hBcwXm3cWJH7VcCvzPG3Licvao6/g8luMoaIU8M6NzFdXtp4AWHC3PQx//ddXYGNfwBV449iyiCNUwAAAABJRU5ErkJggg==",
  },
  {
    key: "4",
    name: "Marco Shoes",
    price: (
      <div className="price-title">
        <p>$32</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>451</p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>$258,105</p>
      </div>
    ),
    ImageSrc:
      "data:image/png;base64,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",
  },
  {
    key: "5",
    name: "15 MackBook Pro",
    price: (
      <div className="price-title">
        <p>$950</p>
      </div>
    ),
    sold: (
      <div className="sold-title">
        <p>745</p>
      </div>
    ),
    revenue: (
      <div className="revenue-title">
        <p>$745,154</p>
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
];

const TopTable = () => {
  return (
    <div>
      <Table scroll={{x: true}} dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default TopTable;
