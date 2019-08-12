/*
 * 创建一个包含所有卡片的数组
 */
const arrDefaultValue = ['fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa-leaf','fa-bicycle','fa-bomb','fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa-leaf','fa-bicycle','fa-bomb'];

/*
 * 为重启按钮设置重启功能
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */
function restart(){
    let targetElements
    // 洗牌
    const arrCardValue = shuffle(arrDefaultValue);
    // 初始化卡片状态，包括将卡片翻转(open)，隐藏卡片值(show)，以及删除匹配状态(match)
    targetElements = document.querySelectorAll('.deck .card');
    for(let i = 0; i < targetElements.length; i++){
      targetElements[i].classList.remove('open','show','match');
    }
    // 将随机生成的新牌面值赋给每张卡片
    targetElements = document.querySelectorAll('.deck .fa');
    for(let i = 0; i < targetElements.length; i++){
      targetElements[i].classList.add(arrCardValue[i]);
    }
    // 重置招式数量
    targetElements = document.getElementsByClassName('moves');
    targetElements[0].textContent = '0';
    // 重置星级评分
    targetElements = document.querySelectorAll('.stars .fa');
    for(let i = 0; i < targetElements.length; i++){
      targetElements[i].classList.add('fa-star');
    }
    //TODO: 添加计时器
  }

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */
