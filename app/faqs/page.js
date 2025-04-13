'use client'
import Accordion from 'react-bootstrap/Accordion';
import SocialBox from '../components/commons/socialBox';

const faqsdata = [
    {'title':'How does Peekshorts summarize news?','content':'lorem ipsum dotemm bottem'},
    {'title':'Is the news unbiased?','content':'lorem ipsum dotemm bottem'},
    {'title':'Can I suggest a news source?','content':'lorem ipsum dotemm bottem'},
    {'title':'Is Peekshorts free?','content':'lorem ipsum dotemm bottem'},
]

export default function FaqsPage(){
    return(
        <>
            <div className="container-fluid bg-secondary py-5 text-white d-flex align-items-center" style={{minHeight:"40vh"}}>
                <div className="container">
                    <h1 className="fw-bold">FAQs</h1>
                </div>
            </div>
            <div className="container py-5" >
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="fs-1">Got Questions?<br/> 
                            <span className="text-danger">We’ve Got Answers.</span>
                        </h2>
                        <p className='small'>We believe in transparency and keeping things simple. Here are some common questions about Peekshorts:</p>
                    </div>
                    <div className='col-md-6'>
                    <Accordion>
                        {faqsdata.map((faq,index)=>(
                            <Accordion.Item eventKey={index} index={index} className='mb-3 rounded-0 border'>
                                <Accordion.Header >{faq.title}</Accordion.Header>
                                <Accordion.Body>
                                {faq.content}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    </div>
                </div>
            </div>
            <SocialBox/>
        </>
    )
}