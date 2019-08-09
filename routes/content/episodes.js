var express = require("express"),
router = express.Router(),
//requires the video schema for episode
Episode = require("../../models/video");

// index route (shows all the episodes)
router.get("/episodes", function(req, res){
    //queries database for only episodes
    Episode.find({videoType: "episode"}, function(err, allEpisodes){
        if(err){
            console.log(err);
        }else{
            // passes through episodes to index.ejs
            res.render("../views/episodes/index.ejs", {episodes: allEpisodes});
        }
    })
    
});

// show route (watch the episode)
router.get("/episodes/:id", function(req, res){
    Episode.findById(req.params.id, function(err, specificEpisode){
        if(err){
            console.log(err);
        }else{
            res.render("../views/episodes/show.ejs", {episode: specificEpisode});
        }
    });
});

module.exports = router;