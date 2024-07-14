const SupportPmComponent = () => {
    return (
        <>
        <div className="box-support">
            <label>Quý khách cần hỗ trợ?</label>
            <div className="group-contact" style={{ marginTop: '10px' }}>
                <a href="https://webcall.talking.vn/frame-click-to-call/new?code=tCEZl1-MKPuA6JU-czVAScCb0pPkHmPt" className="phone">
                <i className='bx bx-phone'></i>
                <p>Gọi miễn phí <br />qua internet</p>
                </a>
                <a href="mailto:info@vietravel.com" className="mail">
                <i className='bx bx-envelope'></i>
                <p>Gửi yêu cầu <br />hỗ trợ ngay</p>
                </a>
            </div>
        </div>
        </>
    )
}

export default SupportPmComponent;