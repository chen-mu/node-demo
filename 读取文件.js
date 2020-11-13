/**
 * 思路：检测文件是否有指定字符串并将文件路径写入到指定文件（B）中；确定B文件只是单纯的用来写入文件路径
 * 1:通过path模块读取指定文件夹的目录结构
 * 2:使用fs.access检查B文件是否存在；如果已经存在那么就确定已经写入过路径，这种情况下需要置空该文件，这里进行的操作是删掉该文件
 * （上面两步操作相互独立）
 * 3:通过fs.readdir读取文件目录内容；将目录内容进行遍历，
 * 4:判断遍历的当前路径的目录类型，如果是fs.isFile文件，则去读取文件；如果是isDirectory文件夹，则再次遍历
 * 
 * 注意：如果需要直接替换匹配到的文件内容；可以直接用replace方法替换内容，然后使用fs.writeFile
 */
const fs = require('fs');
const path = require('path');//解析需要遍历的文件夹
const filePath = path.resolve('../caibeike-fepc-doc/src');
//调用文件遍历方法
delatFile('./demo/file.js')
fileDisplay(filePath);

function delatFile(filePath) {
    const UnLink = () => {
        fs.unlink(filePath, function (err) {//删除文件
            if (err) {
                console.log(err);
                return false;
            }
            console.log('删除文件成功');
        })
    }
    fs.access(filePath, (err) => {
        err ? console.log('目录/文件不存在') : UnLink()
    });

}

//文件遍历方法
function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, (err, files) => { //读取目录的内容
        if (err) {
            console.warn(err)
        } else {
            //遍历读取到的文件列表
            files.map((filename) => {
                //获取当前文件的绝对路径
                const filedir = path.join(filePath, filename);//path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir, (eror, stats) => {
                    if (eror) {
                        console.log('获取文件stats失败');
                    } else {
                        const isFile = stats.isFile();//是文件
                        const isDir = stats.isDirectory();//是文件夹
                        if (isFile) {
                            // 读取文件内容
                            const content = fs.readFileSync(filedir, 'utf-8');
                            // const currentContent = content.replace('','')//需要替换的内容
                            try {
                                if (/http/g.test(content)) {//匹配到需要检测的字符串，输出对应的文件路径
                                    // fs.writeFile(currentContent,filedir,callback())
                                    fs.appendFile('./demo/file.js', filedir + '\n', (err) => err && console.warn(err))
                                }
                            } catch (e) {
                                console.log('111');
                            }
                        }
                        if (isDir) {
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}   