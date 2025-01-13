import React, { useState } from 'react';
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Import default styles
import CloseIcon from "../../../assets/closeIcon.svg";
import MinIcon from '../../../assets/minimizeIcon.svg';
import "./ChatbotResult.css";

interface ChatbotResultProps {
    message: string;
    onClose: () => void;
}

const ChatbotResult: React.FC<ChatbotResultProps> = ({ message, onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isVisible] = useState(true);
    const [viewportWidth] = useState(window.innerWidth);
    const [viewportHeight] = useState(window.innerHeight);

    // Function to format the AI response
    const formatAiResponse = (response: string) => {
        const lines = response.split('\n');
        const formattedBubbles: JSX.Element[] = [];
        let currentBubbleContent: JSX.Element[] = []; // Stores the content of the current chat bubble
    
        const flushBubble = () => {
            if (currentBubbleContent.length > 0) {
                formattedBubbles.push(
                    <div className="chat-bubble flex-col mt-[1vh] text-black bg-transparent" key={formattedBubbles.length}>
                        {currentBubbleContent}
                    </div>
                );
                currentBubbleContent = [];
            }
        };
    
        lines.forEach((line, index) => {
            console.log(line)
            const trimmedLine = line.trim();
    
            // Detect numbered headings (e.g., "1).", "2).") as separate chat bubbles
            if (/^\d+\)\./.test(trimmedLine)) {
                flushBubble(); // End the previous bubble
                currentBubbleContent.push(<h3 key={index} className="font-bold">{trimmedLine}</h3>);
            }
            // Subheadings or paragraphs starting with letters (e.g., "a).", "b).")
            else if (/^[a-z]\)\.\s/.test(trimmedLine)) {
                const [prefix, rest] = trimmedLine.split(/\s(.+)/); // Split into "a)." and the rest of the line
                const content = /^\*\*.*\*\*$/.test(rest) // Check if the rest is bold
                    ? <span className="font-bold">{rest.replace(/^\*\*|\*\*$/g, '')}</span>
                    : rest;
            
                currentBubbleContent.push(
                    <p key={index}>
                        {prefix}<span className="font-bold">{content}</span> 
                    </p>
                );
            }
            else if (/^\*\*.*\*\*$/.test(trimmedLine)) {
                currentBubbleContent.push(
                    <p key={index} className="font-bold">{trimmedLine.replace(/^\*\*|\*\*$/g, '')}</p>
                );
            }
            // List items starting with "- "
            else if (/^-\s/.test(trimmedLine)) {
                currentBubbleContent.push(
                    <p key={index} className="ml-4">• {trimmedLine.replace(/^- /, '')}</p>
                );
            }
            // Regular paragraph content
            else if (trimmedLine) {
                currentBubbleContent.push(<p key={index}>{trimmedLine}</p>);
            } else {
                // Empty line indicates the end of a bubble
                flushBubble();
            }
        });
    
        // Flush any remaining content
        flushBubble();
    
        return <>{formattedBubbles}</>;
    };    

    const handleMinimize = () => setIsMinimized(true);
    const handleRestore = () => setIsMinimized(false);

    return isVisible ? (
        isMinimized ? (
            <div
                className="chatbot-minimized flex items-center justify-center p-2 bg-gray-200 cursor-pointer"
                onClick={handleRestore}
            >
                <span className="text-sm">Chat</span>
            </div>
        ) : (
        <ResizableBox
          width={400}
          height={400}
          minConstraints={[viewportWidth * 0.3, viewportHeight * 0.7]} // Minimum size
          maxConstraints={[viewportWidth, viewportHeight]}
          resizeHandles={["n", "nw", "w"]}
          className="resizable-container"
        >
          {/* Main Chatbot Content */}
          <div
            className="chatbot-result-container z-10"
            style={{
              display: isMinimized ? "none" : "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header Section */}
            <div className="chatbot-header flex justify-between items-center p-2 border-b bg-gray-200">
              <h2 className="text-lg font-bold">AI Response</h2>
              <div className="closeandmin flex">
                <img
                  className="w-[2rem] h-[2rem] cursor-pointer"
                  src={MinIcon}
                  onClick={handleMinimize}
                  alt="Minimize"
                />
                <img
                  className="w-[2rem] h-[2rem] cursor-pointer"
                  src={CloseIcon}
                  onClick={onClose}
                  alt="Close"
                />
              </div>
            </div>
    
            {/* Message Section */}
            <div
              className="chatbot-message p-2 overflow-auto"
              style={{ flexGrow: 1 }}
            >
              {formatAiResponse(message)}
            </div>
          </div>
        </ResizableBox>
        )
    ) : null;
};

export default ChatbotResult;