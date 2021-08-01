(function ($) {
    $.fn.count = function() {

        const clockSet = '22:00:00'


        const hour = $('<span class="clockDigit">').html('0')
        const minute = $('<span class="clockDigit">').html('0')
        const second = $('<span class="clockDigit">').html('0')

        const dotsOne = $('<span class="dots">').html(':')
        const dotsTwo = $('<span class="dots">').html(':')
    
        $(this).addClass('countdown')
        $(this).append(hour, dotsOne, minute, dotsTwo, second)
        
        const targetClock = clockSet.split(':')

        let counter = setInterval(() => {
            const now = new Date()
            const target = new Date()
            target.setHours(targetClock[0])
            target.setMinutes(targetClock[1])
            target.setSeconds(targetClock[2])

            const difference = target.getTime() - now.getTime()


            let sec = Math.floor((difference / 1000) % 60)
            let min = Math.floor((difference / (1000 * 60)) % 60)
            let h = Math.floor((difference / (1000 * 60 * 60)) % 24)

            h = (h < 10) ? "0" + h : h
            min = (min < 10) ? "0" + min : min
            sec = (sec < 10) ? "0" + sec : sec 

            
            hour.html(h)
            minute.html(min)
            second.html(sec)


            if(difference < 0){
                clearInterval(counter)
            }

        }, 1000)

        return this
    }
})(jQuery)