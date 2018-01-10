module.exports = function trapRainWater(elevationMap) {
    let output = 0, leftBorder = 0, rightBorder = elevationMap.length - 1,
        maxLeftBorder = 0, maxRightBorder = 0;
    
    while (leftBorder <= rightBorder) {
        if (elevationMap[leftBorder] <= elevationMap[rightBorder]) {
            if (elevationMap[leftBorder] >=maxLeftBorder) {
                maxLeftBorder = elevationMap[leftBorder];
            }
            else {
                output += maxLeftBorder-elevationMap[leftBorder];
            }
            leftBorder++;
        }
        else {
            if (elevationMap[rightBorder] >= maxRightBorder) {
                maxRightBorder = elevationMap[rightBorder];
            }
            else {
                output += maxRightBorder-elevationMap[rightBorder];
            }
            rightBorder--;
        }        
    }
    return output;
}
