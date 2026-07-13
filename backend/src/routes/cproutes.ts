import  express  from "express";
import { Router } from "express";
import  getLeetCodeRating from "../controllers/leetcoderating"
import  getCodeChefRating from "../controllers/codechefrating"
import getCodeforcesRating from "../controllers/codeforcesrating";


const router =  Router();

router.get('/leetcode/rating/:username',async (req,res)=>{
    const username : string = req.params.username;

    const rating = await getLeetCodeRating(username);
    
    res.json({
    "rating" : rating
    });

    return;
    });

router.get('/codechef/rating/:username',async (req,res)=>{
    const username : string = req.params.username;

    const rating = await getCodeChefRating(username);
    
    res.json({
    "rating" : rating
    });

    return;
    });

router.get('/codeforces/rating/:username',async (req,res)=>{
    const username : string = req.params.username;

    const rating = await getCodeforcesRating(username);
    
    res.json({
    "rating" : rating
    });

    return;
    });






export default router;
