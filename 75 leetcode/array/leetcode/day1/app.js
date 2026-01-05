const binarySearch = (nums, target) => {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target == nums[mid]) return mid
        if (nums[mid] > nums[end]) {
            start = mid + 1
        } else {
            end = mid - 1
        }

    }
    return -1
}

// console.log(binarySearch([4,5,6,7,0,1,2],0))

const threeSum = (nums) => {
    let n = nums.length
    let newSet = new Set()
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    let a = [nums[i], nums[j], nums[k]]
                    a.sort((a, b) => a - b)
                    newSet.add(JSON.stringify(a))
                }
            }
        }

    }
    return Array.from(newSet).map((item) => JSON.parse(item))
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// ))

const mostOptimized = (nums) => {
    let n = nums.length
    let a = new Set()
    for (let i = 0; i < n; i++) {
        let target = -nums[i]
        let newSet = new Set()
        for (let j = i + 1; j < n; j++) {
            let third = target - nums[j]
            if (newSet.has(third)) {
                let b = [nums[i], nums[j], nums[third]]
                b.sort((a, c) => a - c)
                a.add(JSON.stringify(b))
            }
            newSet.add(nums[j])
        }
        console.log(newSet)
    }

    return Array.from(a).map((item) => JSON.parse(item))
}

// console.log(mostOptimized([-1, 0, 1, 2, -1, -4]))



const mostOptimizedSolution = (nums) => {
    let n = nums.length
    nums.sort((a, b) => a - b)
    let answer = []
    for (let i = 0; i < n; i++) {
        let j = i + 1
        let k = n - 1
        while (i > 0 && nums[i] == nums[i - 1]) continue
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum < 0) {
                j++
            } else if (sum > 0) {
                k--
            } else {
                answer.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j] == nums[j - 1]) j++
            }
        }

    }
    return answer
}

console.log(mostOptimizedSolution([-1, 0, 1, 2, -1, -4]))