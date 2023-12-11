import React, { useEffect, useState } from 'react'
import Data from '@/utils/data.json';

const useFeedbackData = () => {
    const [suggestData, setSuggestData] = useState(null);
    const [roadmaps, setRoadmaps] = useState(null);
    const [isloading, setIsLoading] = useState(false);

    const suggestionData = () => {
        let suggestions = Data.productRequests.filter(value => 
            value.status === 'suggestion');
            setSuggestData(suggestions);
    };

    const suggestionByID = (feedbackID) => {
        let suggestions = Data.productRequests.filter(value => 
            value.status === 'suggestion' && value.id === feedbackID);
            setSuggestData(suggestions);
    };

    const roadmapData = () => {
        let roadload = Data.productRequests.filter(value => 
            value.status !== 'suggestion');
            setRoadmaps(roadload);
    };

    useEffect(() => {
        setIsLoading(prev=>!prev);
        suggestionData();
        setIsLoading(prev=>!prev);
    }, []);

    useEffect(() => {
        setIsLoading(prev=>!prev);
        roadmapData();
        setIsLoading(prev=>!prev);
    }, []);

    const filterSuggestionByCatergory = (category) => {
        setIsLoading(prev=>!prev);
        if (category === 'all') {
            suggestionData()
        } else {
            let suggestions = Data.productRequests.filter(value => 
                value.status === 'suggestion' && value.category === category);
                setSuggestData(suggestions);
        }
        setIsLoading(prev=>!prev);
    }

  return { suggestData, roadmaps, isloading, suggestionByID, filterSuggestionByCatergory }
}

export default useFeedbackData
