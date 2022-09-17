const GitBooks = () => {
  return (
    <>
      <p className="gitbook_p">科技書 TechBooks</p>  
      <hr /> 
      <div className="gitbook_box_main">
        <p>開發系統文件</p> 
        <div className="gitbook_box">
          <p>1.Linux service Dev</p>
          <a href="https://andy952737.gitbook.io/linux-mi-ji/" target="_blank">Link</a>
        </div>
        <div className="gitbook_box">
          <p>2.Ruby on Rails Dev</p>
          <a href="https://andy952737.gitbook.io/andyk/" target="_blank">Link</a>
        </div>
        {/*<div className="gitbook_box">
          <p>3.AWS service Dev</p> 
          <a href="https://andy952737.gitbook.io/linux-mi-ji/" target="_blank">Link</a>
        </div>*/}
        <div className="gitbook_box">
          <p>3.ReactJS Dev</p> 
          <a href="https://andy952737.gitbook.io/hooks-reactjs-nodes/" target="_blank">Link</a>
        </div>
      </div>
    </>
  )
};

export default GitBooks; 