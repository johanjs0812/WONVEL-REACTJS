const OderByFilter = ({x}) => {
    return (
      <>
      <div className="order-by">
          <div className="order-by-title">Chúng tôi tìm thấy <strong>{x.length}</strong> tours cho Quý khách.</div>
          <div className="order-by-left">
          <div className="order-wrap">
              <span>Sắp xếp theo</span>
              <select className="form-control dropdown Filter" id="sllOrder" name="sllOrder" style={{ outline: 'none' }}>
              <option>--- Chọn ---</option>
              <option>Theo giá thấp -&gt; cao</option>
              <option>Theo giá cao -&gt; thấp</option>
              <option>Giảm giá nhiều nhất</option>
              </select>
          </div>
          </div>
      </div>
      
      </>
    )
  }

  export default OderByFilter;