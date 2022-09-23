const Portfolio = () => {
  return (
    <>
      <p className="gitbook_p">作品集 Portfolio</p>  
      <hr /> 
      <div className="gitbook_box_main">
        {/*<p>作品集</p> */}
        <div className="gitbook_box">
          <p>1.愛看房網站</p>
          <a href="https://www.eyehouse.co/" target="_blank">Link</a>
        </div>
        <div className="gitbook_box">
          <p>2.智慧校園平台 - 台北護理大學</p>
          <a href="https://www.aodigit.com/ntunhs/" target="_blank">Link</a>
        </div>
        {/*<div className="gitbook_box">
          <p>3.AWS service Dev</p> 
          <a href="https://andy952737.gitbook.io/linux-mi-ji/" target="_blank">Link</a>
        </div>*/}
      </div>
    </>
  )
};

export default Portfolio; 