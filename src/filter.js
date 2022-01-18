import './filter.css'
function Filter()
{
    function findOdd(...generatedList)
    {
        var oddArray = []

        for(let i=0;i<generatedList.length;i++)
        {
            if(generatedList[i] %2 !== 0 )
            {
                oddArray = [...oddArray, generatedList[i]]
            }
            
        }
        
        console.log(oddArray)
         return oddArray
    }

    function findEven(...generatedList)
    {
        var evenArray = []

        for(let i=0;i<generatedList.length;i++)
        {
            if(generatedList[i] %2 === 0 )
            {
                evenArray = [...evenArray, generatedList[i]]
            }
        }
        console.log(evenArray)
        return evenArray
    }

    function generateRandomList (n)
    {
        var generatedList = []
        for(let i=0;i<n;i++)
        {
            generatedList=[Math.floor(Math.random()*100), ...generatedList]
        }
        return([findOdd(...generatedList),findEven(...generatedList)])

    }
    return(
        <div>
            <div>
                {generateRandomList(10).map((elements, index) =>
                    {
                        if(index===0)
                        {
                            return(                            
                                <div className="odd">
                                    <h1>Odd Elements</h1>   
                                    <div className="oddElements">
                                    {
                                        elements.map(element=>{
                                            return(<h3>{element}</h3>)
                                        })
                                    }         
                                    </div>
                                    <br></br>
                                </div> 
                            )
                        }
                        else{
                            return(             
                                <div className="even">
                                    <br></br>
                                    <h1>Even Elements</h1>   
                                    <div className="evenElements">
                                    {
                                        elements.map(element=>{
                                            return(<h3>{element}</h3>)
                                        })
                                    }  
                                    </div>       
                                </div>   
                            )
                        }

                       
                    }
                )}
            </div>
        </div>
    );
}

export default Filter