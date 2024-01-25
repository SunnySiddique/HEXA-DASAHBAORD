import { HomeOutlined } from '@ant-design/icons'

const HeaderTitle = () => {
  return (
    <>
           <div className="demo-header-main">
        <div className="demo-title">
          <span>Dashboard</span>
        </div>
        <div className="demo-small-title">
          <span className="s">
            <HomeOutlined />
            <p>Dashboard</p>
            <span className="ball"></span>
            <p>Demo 1</p>
          </span>
        </div>
      </div> 
    </>
  )
}

export default HeaderTitle
