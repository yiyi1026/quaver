const stageData = {
    stage1: {
        obstacle: [
            [0, 350, 400, 500],
            [500, 350, 400, 500],
            [1000, 350, 100, 500],
            [1200, 350, 100, 500],
            [1400, 300, 300, 500],
            [1800, 350, 300, 500],
            [2200, 250, 200, 500],
            ],
        end: [2300,148]
    },
    stage2: {
        obstacle: [
            [0, 350, 400, 500],
            [500, 250, 385, 500],
            [885, 350, 165, 500],
            [1150, 350, 100, 500],
            [1400, 300, 300, 500],
            [1850, 350, 300, 500],
            [2300, 250, 300, 500],
            ],
        end: [2450,148]
    },
    stage3: {
        obstacle: [
          [0, 350, 400, 500],
          [550, 250, 150, 500],
          [850, 350, 115, 500],
          [1100, 350, 75, 500],
          [1300, 300, 75, 500],
          [1525, 350, 100, 500],
          [1775, 300, 150, 500],
          [2100, 250, 150, 500],
          [2435, 250, 10, 500],
            ],
        end: [2400,148]
    }
}

export const getObstacleData = (lvl)  => {
    let stage = stageData[lvl];
    let obstacle = stageData[lvl].obstacle;
    return obstacle.map( (rect) => {
        let r = new createjs.Shape();
        r.rectangle = new createjs.Rectangle(...rect);
        r.graphics.beginFill('#333333').drawRect(...rect);
        return r;
    }
    )
}

export const getFlagData = (lvl)  => {
    let stage = stageData[lvl];
    return stage.end;
}
