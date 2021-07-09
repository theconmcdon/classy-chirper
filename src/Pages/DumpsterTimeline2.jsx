import React from 'react';

class DumpsterTimeline2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            day: '',
            time: '',
            id: '',
            array: []
        }
    }

    newPost = () => {
        let date = new Date();
        this.setState({
            array: [
              ...this.state.array,
              {
                text: this.state.text,
                day: date.toLocaleDateString(),
                time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                id: Math.random()
              },
            ],
          });
        this.setState({text: ''})
        this.setState({day: ''})
        this.setState({time: ''})
        this.setState({id: ''})
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({
            array: [
              {
                text: 'we could catch unlimited breadsticks at the all of garden or we could just put a bun in the oven ahaha 👉👈',
                day: '6/15/2021',
                time: '01:21pm',
                id: Math.random()
              },
              {
                text: 'finally got my 99 in firemaking only took 4 years',
                day: '6/19/2021',
                time: '12:46am',
                id: Math.random()
              },
              {
                text: "react honestly isn't that hard it's just chaotic",
                day: '6/22/2021',
                time: '09:46am',
                id: Math.random()
              },
            ],
          });
        }, 1);
    }

    hoverEnterPost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.add('text-danger')
    }

    hoverLeavePost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.remove('text-danger')
    }

    hoverEnterImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.add('text-danger')
    }

    hoverLeaveImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.remove('text-danger')
    }

    hoverEnterLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.add('text-danger')
    }

    hoverLeaveLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.remove('text-danger')
    }

    hoverEnterLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.add('text-danger')
    }

    hoverLeaveLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.remove('text-danger')
    }

    hoverEnterRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.add('text-danger')
    }

    hoverLeaveRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.remove('text-danger')
    }

    hoverEnterSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.add('text-danger')
    }

    hoverLeaveSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.remove('text-danger')
    }

    hoverEnterShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.add('text-danger')
    }

    hoverLeaveShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.remove('text-danger')
    }

    render() {
        return (
            <div>
                <div class='pb-1'>
                    <div class='row pb-2 mb-4 d-flex flex-row bg-danger bg-gradient text-white'>
                        <div class='col-2 display-4 text-center'> ‎‏‏‎  ‎‏‏‎ ‎‏‏‎‎‏‏‎‎‏‏‎‎‏‏‎🗑️</div>
                        <div class='col-10 display-4' >‏‏‎{this.props.nickName}'s timeline</div>
                    </div>
                    <div class='row d-flex'>
                        <div class='col-2'>
                            <div class=''>
                                <div class='border-right mt-3 lead border-secondary text-right pr-2' id='btnPost' onClick={() => this.newPost()} style={{cursor: 'pointer'}} onMouseEnter={() => this.hoverEnterPost()} onMouseLeave={() => this.hoverLeavePost()}>Post</div>
                            </div>
                            <div>
                                <div class='border-right lead border-secondary text-right pr-2' id='btnImg' style={{cursor: 'pointer'}} onMouseEnter={() => this.hoverEnterImg()} onMouseLeave={() => this.hoverLeaveImg()}>Add Image</div>
                            </div>
                            <div>
                                <div class='border-right mb-3 lead border-secondary text-right pr-2' id='btnLink' style={{cursor: 'pointer'}} onMouseEnter={() => this.hoverEnterLink()} onMouseLeave={() => this.hoverLeaveLink()}>Add Link</div>
                            </div>
                        </div>
                        <div class='col-9'>

                            <textarea style={{height: '100%', width: '100%', padding: '0px', fontSize: '20px'}} onChange={(e) => this.setState({ text: e.target.value })} class="p-2" rows="2"></textarea>
                        </div>
                        <div class='col-1'></div>
                    </div>
                    <div class='row d-flex'>
                        <div style={{transform: 'translate(4px)'}} class='col-2 position-fixed lead text-right'>

                            <div>
                                <div class='invisible border-right lead border-secondary text-right pr-2' id='btnImg' style={{cursor: 'pointer'}} >Add Image</div>
                            </div>
                            <div>
                                <div class='border-right invisible lead border-secondary text-right pr-2' id='btnLink' style={{cursor: 'pointer'}}></div>
                            </div>
                            <div>
                                <div class='border-right lead invisible border-secondary text-right pr-2' id='btnImg' style={{cursor: 'pointer'}}></div>
                            </div>
                            <div>
                                <div class='border-right lead invisible border-secondary text-right pr-2' id='btnLink' style={{cursor: 'pointer'}}></div>
                            </div>
                            <div>
                                <div class='invisible border-right lead invisible border-secondary text-right pr-2' id='btnImg' style={{cursor: 'pointer'}}></div>
                            </div>
                            <div>
                                <div id='btnLike' style={{cursor: 'pointer'}} onMouseEnter={() => this.hoverEnterLike()} onMouseLeave={() => this.hoverLeaveLike()} class='border-right mt-3 lead border-secondary text-right pr-2'>Like</div>
                            </div>
                            <div class=''>
                                <div id='btnRec' style={{cursor: 'pointer'}} onMouseEnter={() => this.hoverEnterRec()} onMouseLeave={() => this.hoverLeaveRec()} class='border-right lead border-secondary text-right pr-2'>Repost</div>
                            </div>
                            <div>
                                <div id='btnSave' style={{cursor: 'pointer'}} onMouseEnter={() => this.hoverEnterSave()} onMouseLeave={() => this.hoverLeaveSave()} class='border-right lead border-secondary text-right pr-2'>Save</div>
                            </div>
                            <div>
                                <div id='btnShare' style={{cursor: 'pointer'}} onMouseEnter={() => this.hoverEnterShare()} onMouseLeave={() => this.hoverLeaveShare()} class='border-right mb-3 lead border-secondary text-right pr-2'>Share</div>
                            </div>
                            <div>
                                <div class='border-right invisible lead border-secondary text-right pr-2' id='btnLink' style={{cursor: 'pointer'}} ></div>
                            </div>
                        </div>
                        <div id='mainbody' class='col-9 d-flex flex-column offset-2 mt-3 overflow-auto'>
                            <div class=''>
                                {this.state.array.map((val) => {
                                    return (
                                        <blockquote style={{borderRadius: '10px'}} class="blockquote bg-white border p-5">
                                            <div class='row'>
                                                <img style={{height: '70px', width: '70px', borderRadius: '10px'}} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                                                <div class='col-8'>
                                                    <div class='pl-5 lead'></div>
                                                    <p key={`the-array-${val.id}`} class="pl-5 mb-0">{val.text}</p>
                                                    <footer class="ml-5 blockquote-footer">@{this.props.username} on <cite title="Source Title">{val.day} at {val.time}</cite></footer>
                                                </div>
                                            </div>
                                        </blockquote>
                                    )
                                })}
                            </div>
                        </div>
                        <div class='col-1 offset-11'></div>
                    </div>
                    <div class='d-flex row mt-5 mb-5'>
                        <div class='col-12'>
                            <div class='lead justify-content-center row'>End of Feed</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DumpsterTimeline2;


