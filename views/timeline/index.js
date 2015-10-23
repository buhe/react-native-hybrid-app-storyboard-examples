/**
 * Created by guguyanhua on 10/22/15.
 */
var React = require('react-native');
var RefreshableListView = require('react-native-refreshable-listview');
var { Icon, } = require('react-native-icons');
var Dimensions = require('Dimensions');
var deviceScreen = Dimensions.get('window');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
    } = React;

const dummy = [
  {
    paperName: 'test1',
    name: 'author1'
  },
  {
    paperName: 'test1',
    name: 'author1'
  },
  {
    paperName: 'test1',
    name: 'author1'
  }
];

var ExamItem = React.createClass({
  pushPaperById(){
    //ExamActionCreators.reset();
    //ExamActionCreators.fetchExamById(this.props.exam._id);
    //this.props.navigator.push({
    //  title: this.props.exam.name + ' 在作答 ' + this.props.exam.paperName,
    //  component: ExamView,
    //})
  },
  render: function () {
    return (
        <View style={styles.container}>
          <View style={styles.nameContainer}>
            <View style={{flexDirection:'row'}}>
              <Image
                  source={{uri: 'https://drscdn.500px.org/photo/3348095/h%3D450/a49d347c75bbdbec450f94085bc01ea2'}}
                  style={styles.avatar}
                  />
              <View style={styles.account}>
                <Text>用户名A</Text>
                <Text style={styles.postDetailsLine}>3天前</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <View style={styles.follow}><Text>+关注</Text></View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imageContainer}>

            <Image
                source={{uri: 'https://drscdn.500px.org/photo/3348095/h%3D450/a49d347c75bbdbec450f94085bc01ea2'}}
                style={styles.image}
                >
              <Image
                  source={{uri: 'https://drscdn.500px.org/photo/3348095/h%3D450/a49d347c75bbdbec450f94085bc01ea2'}}
                  style={{top:8,left:8,width: 32,height: 32}}
                  />
            </Image>
          </View>
          <View>
            <Text style={styles.descContainer}>描述100个字描述100个字描述100个字描述100个字描述100个字描述
              100个字描述100个字描述100个字描述100个字描述100个字描述100个字描述100个字描述100个字描述100个字
              描述100个字描述100个字描述100个字描述100个字描述100个字描述100个字描述100个字描述100个字</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.leftButtonContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <Icon
                      name='ion|android-favorite-outline'
                      size={32}
                      style={styles.avatar}
                      color='gray'
                      />
                </TouchableOpacity>
                <Text style={styles.actionCount}>128</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <Icon
                      name='ion|chatbox-working'
                      size={32}
                      style={styles.avatar}
                      color='gray'
                      />
                </TouchableOpacity>
                <Text style={styles.actionCount}>320</Text>
              </View>
            </View>
            <View style={styles.rightButtonContainer}>
              <TouchableOpacity>
                <Icon
                    name='ion|more'
                    size={32}
                    style={styles.avatar}
                    color='gray'
                    />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator}></View>
        </View>
    );
  }
});

var ExamsView = React.createClass({
  mixins: [
    //Reflux.connect(ExamsStore) //预览PaperStore中的问题
  ],
  getInitialState: function () {
    //ExamsActionCreators.fetchExams();
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  },
  render: function () {
    return (
        <RefreshableListView
            dataSource={this.state.dataSource.cloneWithRows(dummy)}
            renderRow={this.renderQuestion}
            style={styles.listView}
            //loadData={dummy}
            refreshDescription="松开刷新..."
            />
    );
  },
  renderQuestion: function (exam) {
    return ( <ExamItem
            exam={exam}
            {...this.props}
            />
    );
  }
});


var styles = StyleSheet.create({
  listView: {
    backgroundColor: '#F6F6EF',
    flex: 1,
  },
  nav: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F6F6EF',
  },
  postCount: {
    margin: 10,
    marginLeft: 15,
  },
  postDetailsContainer: {
    flex: 1,
  },
  postTitle: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 4,
    marginRight: 10,
    color: '#FF6600'
  },
  postDetailsLine: {
    fontSize: 12,
    //marginBottom: 10,
    color: 'gray',
  },
  separator: {
    height: 10,
    backgroundColor: '#CCCCCC',
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  account: {
    marginLeft: 8
  },
  imageContainer: {
    flex: 1
  },
  descContainer: {
    flex: 1,
    fontSize: 14,
    margin: 10,
    color: 'gray',
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftButtonContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    //flex: 1,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButtonContainer: {
    //flex: 1,
    marginRight: 8,
    flexDirection: 'row',
    //alignItems: 'center',
  },
  actionCount: {
    marginLeft: 8
  },
  image: {
    flex: 1,
    width: deviceScreen.width,
    height: 320
  },
  avatar: {
    //flex:1,
    width: 32,
    height: 32
  },
  follow: {
    marginRight: 0,
    marginTop: 3,
    marginBottom: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
  }
});

module.exports = ExamsView;
