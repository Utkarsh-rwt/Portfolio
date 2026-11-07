import  express  from "express";
import { Router } from "express";
import { addPullRequest, listPullRequests, refreshPullRequests } from "../controllers/openSource";
import { getCachedRating } from "../controllers/ratings";
import { getCachedRatingHistory } from "../controllers/ratingHistory";


const router =  Router();
 

router.get("/open-source/pull-requests", async (_req, res) => {
    res.json(await listPullRequests());
    });

router.get('/leetcode/rating/:username',async (req,res)=>{
    try {
        res.json(await getCachedRating("leetcode"));
    } catch (error) {
        res.status(502).json({
            "error": error instanceof Error ? error.message : "Unable to fetch LeetCode rating"
        });
    }
    });

router.get('/codechef/rating/:username',async (req,res)=>{
    try {
        res.json(await getCachedRating("codechef"));
    } catch (error) {
        res.status(502).json({
            "error": error instanceof Error ? error.message : "Unable to fetch CodeChef rating"
        });
    }
    });

router.get('/codeforces/rating/:username',async (req,res)=>{
    try {
        res.json(await getCachedRating("codeforces"));
    } catch (error) {
        res.status(502).json({
            "error": error instanceof Error ? error.message : "Unable to fetch Codeforces rating"
        });
    }
    });

router.get('/codeforces/rating-history/:username', async (req, res) => {
    try {
        res.json(await getCachedRatingHistory("codeforces", req.params.username));
    } catch (error) {
        res.status(502).json({
            "error": error instanceof Error ? error.message : "Unable to fetch Codeforces rating history"
        });
    }
    });

router.get('/codechef/rating-history/:username', async (req, res) => {
    try {
        res.json(await getCachedRatingHistory("codechef", req.params.username));
    } catch (error) {
        res.status(502).json({
            "error": error instanceof Error ? error.message : "Unable to fetch CodeChef rating history"
        });
    }
    });

export default router;
