<!DOCTYPE html>
<html lang="es-PE" ng-app="sismarketingApp">
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
    
    <!--<link rel="stylesheet" href="<?php ////include APPPATH.'views/public/styles/bootstrap/css/bootstrap.min.css'; ?>">-->
    <!--<link rel="stylesheet" href="<?//php include '/public/styles/bootstrap/css/bootstrap.min.css'; ?>">
    <link rel="stylesheet" href="<?php //include '/public/styles/bootstrap/css/bootstrap-theme.min.css'; ?>">                    
    <link rel="stylesheet" href="<?php //include '/public/styles/fonts/font-awesome-4.0.3/css/font-awesome.min.css'; ?>">-->

    <!-- <link rel="stylesheet" href="<?php //echo base_url()?>public/styles/style.css"> -->
    
    <link rel="stylesheet" href="<?php echo base_url()?>css/css/style.css">
    <link rel="stylesheet" href="<?php echo base_url()?>css/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url()?>css/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="<?php echo base_url()?>css/fonts/font-awesome-4.0.3/css/font-awesome.min.css">

    <!-- http://marketing-alterno.com/sismarketing/css/style.css -->
    <!-- http://marketing-alterno.com/sismarketing/public/styles/style.css -->

    <!--
      <link rel="stylesheet" href="<?php //echo base_url()?>public/styles/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" href="<?php //echo base_url()?>public/styles/bootstrap/css/bootstrap-theme.min.css">
      <link rel="stylesheet" href="<?php //echo base_url()?>public/styles/fonts/font-awesome-4.0.3/css/font-awesome.min.css">
    -->

    <!--<link rel="stylesheet" href="<?php //include APPPATH.'views/public/styles/bootstrap/css/bootstrap.min.css'; ?>">-->
    <!--
    <link rel="stylesheet" href="<?php //include APPPATH.'views/public/styles/bootstrap/css/bootstrap-theme.min.css'; ?>">
    <link rel="stylesheet" href="<?php //include APPPATH.'views/public/styles/fonts/font-awesome-4.0.3/css/font-awesome.min.css'; ?>">
    -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Anaheim">

  </head>
  <body>
    <div id="web" ng-controller="loginCtrl">
      <div class="login">
        <div class="row">
          <div class="title well col-md-6">Bienvenido a Sismarketing</div>
        </div>
        <div class="row">
          <div class="well col-md-6">
            <fieldset>
              <legend>Login</legend>
              <form name="loginForm" ng-submit="submitForm()" novalidate class="form-horizontal">
                <div class="row">
                  <div class="form-group input-grup-lg">
                    <label for="email" class="control-label col-sm-3">email:</label>
                    <div class="input-group col-sm-9"><span class="input-group-addon">@</span>
                      <input id="email" type="email" placeholder="email" name="email" ng-model="email" ng-minlength="5" required class="email form-control">
                    </div><i class="fa senal fa-{{validationStyle(loginForm.email,'smile-o','frown-o')}} form-control-feedback">	</i>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group">
                    <label for="password" class="control-label col-sm-3">password:</label>
                    <div class="input-group input-grup-lg">		<span class="input-group-addon"><i class="fa fa-key"></i></span>
                      <input type="password" placeholder="password" name="password" ng-model="password" required class="password form-control">
                    </div><i class="fa senal fa-{{validationStyle(loginForm.password,'smile-o','frown-o')}} form-control-feedback">	</i>
                  </div>
                </div>
                <div class="row footer">
                  <label class="checkbox-inline">
                    <input type="checkbox">Olvide mi contraseña
                  </label>
                  <button type="submit" ng-disabled="loginForm.$invalid" class="btn submit btn-danger btn-lg btn-block">Login</button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>

    <script src="<?php echo base_url()?>js/lib/jquery-2.0.3.min.js"></script>
    <script src="<?php echo base_url()?>css/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?php echo base_url()?>js/lib/angular.min.js"></script>

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.3/angular-sanitize.js"></script>

    <script src="<?php echo base_url()?>js/app.js"></script>
    <script src="<?php echo base_url()?>js/controllers.js"></script>
    <script src="<?php echo base_url()?>js/services.js"></script>
    <script src="<?php echo base_url()?>js/factorys.js"></script>
    <script src="<?php echo base_url()?>js/filters.js"></script>

    <!-- // <script src="/sismarketing/application/views/public/js/lib/jquery-2.0.3.min.js"></script> -->
    <!-- 
    <script src="/sismarketing/application/views/public/styles/bootstrap/js/bootstrap.min.js"></script>
    <script src="/sismarketing/application/views/public/js/lib/angular.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.3/angular-sanitize.js"></script>

    <script src="/sismarketing/application/views/public/js/app.js"></script>
    <script src="/sismarketing/application/views/public/js/controllers.js"></script>
    <script src="/sismarketing/application/views/public/js/services.js"></script>
    <script src="/sismarketing/application/views/public/js/factorys.js"></script>
    <script src="/sismarketing/application/views/public/js/filters.js"></script>
    s -->
  </body>
</html>