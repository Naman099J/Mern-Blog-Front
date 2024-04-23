import React from 'react';
import { Link } from 'react-router-dom';

const Story = ({ story, userId }) => {

    const editDate = (createdAt) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(createdAt);
        var datestring = d.getDate() + " " +monthNames[d.getMonth()] + " " + d.getFullYear() 
        return datestring
    }

    const truncateContent = (content) => {
        const trimmedString = content.slice(0, 160);
        return trimmedString
    }
    const truncateTitle= (title) => {
        const trimmedString = title.substr(0, 69);
        return trimmedString
    }

    if (story.author !== userId) {
        return null; // Do not render the story if authored by another user
    }
    
    return (

        <div className="story-card">
            <Link to={`/story/${story.slug}`} className="story-link">

                <img className=" story-image" src={`/storyImages/${story.image}`} alt={story.title} />
                <div className="story-content-wrapper">


                    <div className="story-details">
                        <h5 className="story-title">
                            
                            {story.title.length > 20 ? truncateTitle(story.title)+"..." : story.title
                            
                            }
                            </h5>
                            <p className="story-createdAt">{editDate(story.createdAt)} 
                            </p>
                    </div>

                    <p className="story-text"dangerouslySetInnerHTML={{__html : truncateContent( story.content) +"..."}}>
                        </p>
                </div>
            </Link>
        </div>

    )
}

export default Story;
