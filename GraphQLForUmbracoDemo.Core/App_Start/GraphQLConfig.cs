using Umbraco.Core;
using Umbraco.Web;

using Our.Umbraco.GraphQL.Web;

namespace GraphQLForUmbracoDemo.Core
{
    public class GraphQLConfig : ApplicationEventHandler
    {
        protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            UmbracoDefaultOwinStartup.MiddlewareConfigured += (sender, e) =>
                e.AppBuilder.UseUmbracoGraphQL(applicationContext, new GraphQLServerOptions());
        }
    }
}
