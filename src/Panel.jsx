export default function Panel({ panel, handleClick}){
    return  (<div className=" p-4 bg-pink-200 m-4" onClick={()=> handleClick(panel)}>
            <div className="flex items-center justify-between"> <span >{panel.title}</span>
                <span>+</span>
                </div>
            <p
              style={{
                display: panel.open? 'block': 'none'
              }}
            >
              {panel.description}
            </p>
          </div>
          );
        }