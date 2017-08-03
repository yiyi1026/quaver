const stageData = {
    stage1: {
        obstacle: [
            [0, 350, 400, 150],
            [500, 350, 400, 150],
            [1000, 350, 100, 150],
            [1200, 350, 100, 150],
            [1400, 300, 300, 200],
            [1800, 350, 300, 150],
            [2200, 400, 100, 100],
            ],
        end: [2250,350]
    },
    stage2: {
        obstacle: [
            [0, 350, 400, 150],
            [500, 350, 400, 150]
            ],
        end: [100,200]
    },
    stage3: {
        obstacle: [
            [0, 350, 400, 150],
            [500, 350, 400, 150]
            ],
        end: [100,200]
    }
}

export const getObstacleData = (lvl)  => {
    let stage = stageData[lvl];
    let obstacle = stageData[lvl].obstacle;
    return obstacle.map( (rect) => {
        let r = new createjs.Shape();
        r.rectangle = new createjs.Rectangle(...rect);
        r.graphics.beginFill('333333').drawRect(...rect);
        return r;
    }
    )

}