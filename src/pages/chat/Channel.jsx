import React from "react";
import ChatChannel from "./ChatChannel";
import Message from "../../components/Message";

const Channel = () => {
  return (
    <div className='content flex overscroll-none h-screen'>
      <div className="w-1/4">
        <h1 className="headtext ">All Messages</h1>
        <div className="height overflow-y-scroll">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        </div>
        
      </div>
      <ChatChannel />
    </div>
  );
};

export default Channel;
