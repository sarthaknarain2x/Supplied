import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './missionstatement.scss';
import video from '../assets/samplevideo.mp4'
import websiteLogo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function MissionStatement(){
    const history = useNavigate();
    return(
        <div>
            <div className="missionstatement">
                <div className="missionstatement_video">
                <video width= "100%;" height = "100%;" autoplay = "autoPlay" muted loop>
                    <source src= {video} type="video/mp4"/>
                </video>
                </div>
                <div className="statement_button">
                    <h2>Help Students Now!</h2>
                    <button onClick={()=>{history('/donate')}}>Donate</button>
                </div>
            </div>
            <div className ="mission">
                <h1 className = "h1">The Mission</h1>
                <p className = "p">Supplied aims to provide all students the tools they need to succeed at University. Students in need will be able to get any supplies they require thanks to our helpful supporters. Our goal is for all students to be able to learn!</p>
            </div>
            <hr />
            <div className='imagecard'>
            <a className= "link" href = "/listings">
                    <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://media.istockphoto.com/id/1179960354/photo/close-up-man-hands-using-a-calculator-and-laptop-computer-for-calculating-with-finance-paper.jpg?s=612x612&w=0&k=20&c=E4eTXsetsmMsZl_YuEmeM387astqTmQaOytMNcqEfaY="
                                alt="devices"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Electronic Devices
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Devices such as laptops and calculators can be requested by students.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                    <a className= "link" href = "/listings">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://media.istockphoto.com/photos/composition-with-books-on-the-table-picture-id1158413597?b=1&k=20&m=1158413597&s=612x612&w=0&h=_opqn6yPrZAsMNWuMmz8iHWoybdhxO_GeQAubLHJ7_8="
                            alt="books"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Books
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Educational textbooks, reports, and lab materials can be requested by students.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                    <a className= "link" href = "/listings">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://media.istockphoto.com/id/1298288294/photo/various-stationery-arranged-in-order.jpg?b=1&s=170667a&w=0&k=20&c=1BnHEOreIBeifNo8BmqokfEtl85hbu1r_dCtaShKXh4="
                            alt="supplies"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    School Supplies
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    School supplies such as stationery can be requested by students.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </div>
        </div>
    )
}
export default MissionStatement;