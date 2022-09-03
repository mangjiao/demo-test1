import './App.css';
import React, {useState} from 'react'
function App() {
	const [data,setData] = useState(['删', '改', '查'])
	const [code,setCode] = useState([0,0,0])
	const addData = () => {
		setData([...data,'New note'])
		setCode([...code,0])
	}
	const removeData = (index) => {
		data.splice(index,1)
		setData([...data])
	}
	const editText = (index) => {
		while(true){
			var newText = prompt('昂~年轻的用户哟~你来到了编辑标签的地方',data[index])
			if(newText){
				if(newText.length <= 20){
					data.splice(index,1,newText)
					setData([...data])
					break
				}else{
					alert('超过20个字符了哦！')
				}
			}else if(newText === ""){
				alert("还没有写东西呢！")
			}else{
				break
			}
		}
	}
	const fuxuan = (e) => {
		var img = document.getElementsByClassName(e.target.className)[e.target.name]
		if(img.flag === 0){
			img.src = './image/fuxuans.png'
			img.flag = 1
		}else{
			img.src = './image/fuxuan.png'
			img.flag = 0
		}
	}
	return (
		<div className="demo1">
			<ul>
				<li onClick={addData}>
					<img className="new" id="new" src="./image/new.png" alt="寄"/>
					<span className="font">增</span>
				</li>
				<div className="hr"/>
				{
					data.map((item,index)=>{
						return (
							<div key={index}>
								<li className='li' onDoubleClick={() => editText(index)}>
									<img className="fuxuan" flag="0" onClick={(e) => fuxuan(e)} name={index} src="./image/fuxuan.png" alt="寄"/>
									<span className="font">{item}</span>
									<img className="delete" onClick={() => removeData(index)} src="./image/delete.png" alt="寄"/>
									<img className="modify" onClick={() => editText(index)} src="./image/modify.png" alt="寄"/>
								</li>
								<div className="hr"/>
							</div>
						)
					}) 
				}
			</ul>
			<div className="demo2">
				<div className="num">{data.length} items left</div>
				<span className="All">All</span>
				<span className="Active">Active</span>
				<span className="Completed">Completed</span>
				<span className="Clear">Clear completed</span>
			</div>
		</div>
		);
}

export default App;